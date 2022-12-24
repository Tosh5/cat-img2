import { Writable } from 'stream'
//@ts-ignore
import { record } from 'node-record-lpcm16'
import { state } from './state'
import { callEnd, recordingStop } from '../call.listeners'

export const createAudioInputTransform = () => {
  const { call } = state
  if (!call) throw new Error(`[createAudioInputTransform] - call null or undefined`)
  const audioInputTransform = new Writable({
    write: (chunk, _encoding, callback) => {
      if (!Buffer.isBuffer(chunk)) throw new TypeError("[createAudioInputTransform] - invalid type of chunk data")
      if (call.writableEnded) return console.log("[createAudioInputTransform] - skip writing audiobytes")
      call.write({ audiobytes: chunk })
      callback()
    },
    final: () => {
      callEnd("[createAudioInputTransform]")
    }
  })
  return audioInputTransform
}

export interface CreateRecordingInput { audioInputTransform: Writable, sampleRateHertz: number }
export const createRecording = ({ audioInputTransform, sampleRateHertz }: CreateRecordingInput) => {
  const recording = record({
    sampleRateHertz,
    threshold: 0,
    verbose: false,
    recordProgram: "rec",
    silence: 10.0,
  })
  const recordingStream = recording.stream()
  const errorCallback = (error: unknown) => {
    if (error instanceof Error) {
      console.error("[createRecording] - recording.stream on error: error = ", error)
    }
    else console.error("[createRecording] - recording.stream on error")
    recordingStop("[createRecording]")
  }
  recordingStream.on('error', errorCallback)
  recordingStream.pipe(audioInputTransform)      
  return recording
}