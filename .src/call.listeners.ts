import { StreamResponse__Output } from '../protos/generated/yysystem/StreamResponse'
import { isStatusObject } from './util/grpc'
import { state } from './util/state'

export const callEnd = (tagString: string) => {
  const { call } = state
  if (!call) {
    console.warn(`${tagString} - call undefined`)
    return
  }
  if (call.writableEnded) {
    console.warn(`${tagString} - writable stream already ended`)
    return
  }
  call.end()
}

export const recordingStop = (tagString: string) => {
  const { recording } = state
  if (!!recording) {
    console.info(`${tagString} - stop recording.`)
    recording.stop()
    state.recording = null
    return
  }
  const { call } = state
  if (!!call && !call.writableEnded) callEnd(tagString)
}

export const callOnError = () => {
  const callback = (e: unknown) => {
    console.error("[callOnError] - error = ", e)
    if (isStatusObject(e)) {
      console.error(e)
      const { code, details, metadata } = e
      console.error(`[CallOnError] - code = ${code}, details = ${details}, metadata = `, metadata.get('errors').map(err => JSON.parse(err.toString())))
      if (code === 13) {
        console.error(`[CallOnError] - error.code = 13 detected`)
        recordingStop("[CallOnError]")
      }
    }
  }
  const { call } = state
  if (!call) throw new Error(`callOnError: call undefined`)
  call.on('error', callback)
}

export const callOnEnd = () => {
  const callback = () => {
    console.log("[callOnEnd] - call end")
    recordingStop("[callOnEnd]")
  }
  const { call } = state
  if (!call) throw new Error(`[callOnEnd] - call undefined`)
  call.on('end', callback)
}

export const callOnClose = () => {
  const callback = () => {
    console.log(`[callOnClose] - call closed`)
    state.call = null
    recordingStop("[callOnClose]")
  }
  const { call } = state
  if (!call) throw new Error(`[callOnClose] - call undefined`)
  call.on('close', callback)
}

export const callOnData = () => {
  const callback = (chunk: StreamResponse__Output) => {
    const { error, result } = chunk
    const { call } = state
    if (!call) throw new Error(`[callOnData] - call undefined`)
    if (!!error) {
      console.error("[callOnData] - stream response error = ", error)
      if (error.code === 7) {
        recordingStop("[callOnData]")
      }
      return
    }
    if (!result || Object.entries(result).length === 0) {
      console.log("[callOnData] - streamResponse.result object empty.")
      return
    }
    const { isFinal, words, transcript } = result
    if (isFinal) {
      console.log(`[callOnData] - isFinal = ${isFinal}, transcript = ${transcript}`, ", words = ", words)
      if (!call.writableEnded) console.info(`[callOnData] - type 'end' and press Enter" to end call.`)
      return
    }
    console.log(`callOnData: isFinal = ${isFinal}, transcript = ${transcript}`)
  }
  const { call } = state
  if (!call) throw new Error(`[callOnData] - call undefined`)
  call.on('data', callback)
}