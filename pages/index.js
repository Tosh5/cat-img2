import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Gauge from '../features/Gauge';
import io from "socket.io-client";

import styles from '../styles/Home.module.css'
import { useState } from 'react';
import StartButton from '../features/StartButton';

// import Monitor from '../features/Monitor';
const Monitor = dynamic(() => import("../features/Monitor"), { ssr: false });

import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

// websocket通信を開始。下記はAWSのURL。ポート番号の解放を忘れない。
const socket = io.connect("https://43.207.73.189:8000")

export default function Home() {
  // index(自分の動きの激しさ)を定義。初期値0
  const [index, useIndex] = useState(0)
  // 画面右下のメッセージの定義
  const [info, useInfo] = useState('応援してください')
  // 参加者数をsocket.ioでサーバから取得して、格納。
  const [num_participants, setNumParticipants] = useState()

  // サーバからws通信の同時接続数を取得。num_pa~を更新。
  socket.on('num_participants', (data)=>{
    setNumParticipants(data)
  })

  // ↓サーバからrandという乱数を、wsでクライアントに送りつけている。
  // ↓送りつける周期は100msが目安。
  // randを受信したら、今のindex(盛り上がり度)をwsでサーバに送り返す
  socket.on("rand", (data) =>{
    socket.emit('myindex', {myindex : index})
  })



  return (
    <>
      <div className="App">
      <div className="team-index">
        <h1 className='title'>チーム全体の応援</h1>
        <p>build 2022/12/24 1718</p>
        <button 
          className='button' 
          // onClick={sendMyIndex}
        >arstarsta</button>
        {/* <CreateRand /> */}

        <Gauge score={index} />
        <StartButton 
          num_participants={num_participants}
          index={index}
          // rand={rand}
          />
      </div>

      <div className='bottom'>
        <h1 className='title'>あなたの応援</h1>
        <div className='monitor'>
            {/* <h1>メッセージ</h1> */}
            <Monitor useIndex={useIndex} /> 
        </div>  

        <div className='info'>
            <h3>メッセージ：</h3>
            <h1>{info}</h1>
            <div className="minigauge">
              <h1>あなたの応援熱量</h1>
              <br />
              {/* <h1 className='score'>{index}</h1> */}
              <Gauge score={index} />
            </div>
        </div>
      </div>
    </div>

    </>
  )
}
