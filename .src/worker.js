const sleep = require('sleep');

const express = require('express')
const app = express()
const {Server} = require('socket.io')
const http = require('http')
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})


const {parentPort} = require('worker_threads');
// 親からのメッセージを受ける
parentPort.on('message', async msg => {
    console.log('worker received: %o', msg);
    const {action, args} = msg;

    const sendRand = () =>{
        var random = Math.random();
        // console.log(`random is ${random}`)
        io.emit("rand", (random))
        console.log('100msおきに、、')
    }

    while (true) {
    console.log('100msおきに、、')
    sleep.msleep(100)
    sendRand()
    }

   
      
    // setInterval(sendRand, 1000);

    // // 依頼に応じて処理を分ける
    // if (action === 'add') {
    //     // 処理を行う
    //     const v = args[0] + args[1];
    //     // 親に処理結果を送信
    //     parentPort.postMessage({'result': v});
    // }
    // else if (action === 'mul') {
    //     // 処理を行う
    //     const v = args[0] * args[1];
    //     // 親にメッセージを送信
    //     parentPort.postMessage({'result': v});
    // }
    // else {
    //     throw new Error('Unknown action');
    // }
    // process.exit(); // ワーカーを終了
});