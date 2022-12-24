const {Worker} = require('worker_threads');
const worker = new Worker('./src/worker.js');


const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket: any) =>{
    console.log(`User Connected: ${socket.id}`)
    console.log('コネクション数',socket.client.conn.server.clientsCount);

    io.emit("num_participants", (socket.client.conn.server.clientsCount))
    // worker.postMessage({action:'mul', args:[2, 3]});

    socket.on("send_message", (data: any)=>{
        // console.log(data)
        io.emit("receive_message", data)
    })

    // socket.on("sendMyIndex", (data: any) => {
    //   console.log("atts")
    //     console.log(data)
    // })

    socket.on("myindex", (data: any) => {
      console.log("attss")
        console.log(data)
    })


    socket.on("sendStart", (data: any) => {
      console.log(data)
      var random = Math.random();
      io.emit("rand", (random))
      io.emit("num_participants", (socket.client.conn.server.clientsCount))
      

      const num_part = socket.client.conn.server.clientsCount
      console.log(`参加者は${num_part}人`)

      const num_collect = 20 * num_part

      const combined =  [...Array(num_collect)].map((_, i) => i);
	      for (var i = 0; i < num_collect; i++){
		      combined[i] = 0;  // 0 で初期化
	      }

  })

    socket.on("disconnect", (socket : any) =>{
      console.log(`User Disconnected: ${socket.id}`)
    })
})






server.listen(8000, () =>{
    console.log('server is running')
})


import { createInterface } from 'readline'
import { Metadata } from 'grpc'
import {
  callOnData,
  callOnError,
  callOnClose,
  callOnEnd,
  recordingStop,
} from './call.listeners'

import {
  apiKey,
  apiEndpoint,
  apiPort,
  model,
  encoding,
  languageCode,
  sampleRateHertz,
  enableInterimResults,
  enableWord,
  audioChannelCount,
} from './util/process.env'
import { createRecognizeStreamCall } from './util/grpc'
import { StreamingConfig } from '../protos/generated/yysystem/StreamingConfig'
import {
  createAudioInputTransform,
  createRecording
} from './util/recording'
import { state } from './util/state'
import { privateEncrypt } from 'crypto'

const main = () => {
  const reader = createInterface({ input: process.stdin })
  reader.on('line', line => {
    if (line === 'start') {
      const { call, recording } = state
      if (!!recording) {
        console.error(`[main] - recording already started`)
        return
      }
      if (!!call && !call.closed) {
        console.error(`[main] - call not closed yet`)
        return
      }
      if (!apiEndpoint) throw new Error("[main] - invalid value: apiEndpoint empty string or undefined")
      if (!apiPort) throw new Error("[main] - invalid value: apiPortT empty string or undefined")
      const address = `${apiEndpoint}:${apiPort}`
      const metadata = new Metadata()
      if (!apiKey) throw new Error("[main] - invalid value: apikey empty string or undefined")
      metadata.add('x-api-key', apiKey)
      if (typeof model === 'undefined') throw new Error("[main] - invalid value: model undefined")
      if (!encoding) throw new Error("[main] - invalid value: encoding empty string or undefined")
      if (typeof languageCode === 'undefined') throw new Error("[main] - invalid value: languageCode undefined")
      if (!sampleRateHertz) throw new Error("[main] - invalid value: sampleRateHertz 0 or undefined")
      const streamingConfig: StreamingConfig = {
        model,
        encoding,
        languageCode,
        sampleRateHertz,
        enableInterimResults,
        enableWord,
        audioChannelCount,
      }
      metadata.add('x-streaming-config', JSON.stringify(streamingConfig))
      state.call = createRecognizeStreamCall({ address, metadata })
      callOnData()
      callOnError()
      callOnEnd()
      callOnClose()
      console.info(`[main] - start recording`)
      const audioInputTransform = createAudioInputTransform()
      state.recording = createRecording({ audioInputTransform, sampleRateHertz })
    }
    if (line === 'end') {
      const { call, recording } = state
      if (!recording) {
        console.error(`[main] - recording not started yet`)
      }
      if (!call || !!call.closed) {
        console.error(`[main] - call already closed or not connected yet`)
        return
      }
      recordingStop("[main]")
    }
  })
  console.info("[main] - type 'start' and press 'Enter' key to start mic streaming recognition")
}

main()


const sendRand = () =>{
  var random = Math.random();
  // console.log(`random is ${random}`)
  io.emit("rand", (random))
  console.log('100msおきに、、')
}

setInterval(sendRand, 1000);


// ワーカーを作成する
// const {Worker} = require('worker_threads');
// const worker = new Worker('./worker.js');

// ワーカーからの結果を受ける
// worker.on('message', msg => {
//     console.log(msg);
// });

// ワーカーに仕事を依頼
// worker.postMessage({action:'mul', args:[2, 3]});



