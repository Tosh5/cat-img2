import io from "socket.io-client";
const socket = io.connect("https://43.207.73.189:8000")

const StartButton = (props) => {

    // 下記の「応援を開始」ボタンを押したら、サーバにシグナルを送信
    const sendStart =() =>{
        // サーバに応援の開始のシグナルを送る。
        socket.emit('sendStart', {start:'s。tart'})
        // // サーバに今の自分の応援の熱量を送る
        // socket.emit('myindex', {myindex: props.index})
    }
    return (
        <div>
            <h3>現在の参加者数</h3>
            <h1 className='title'>{props.num_participants}</h1>
            <h3>↓参加者が揃ったら↓</h3>
            <button className='button' 
            onClick={sendStart}
            >▶︎ 応援を開始</button>
        </div>
    );
}

export default StartButton;
