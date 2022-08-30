import {socket} from "../App";
import {useEffect} from "react";
import './game.css'

const Proba = () => {
    const send = () => {

        socket.emit('posalji', {poruka: "EVO ME"})
    }

    useEffect(()=> {
        socket.on('poruka_svima', (data)=> {
            alert(data.poruka)
        })
    }, [socket])
    return (
        <div className="pozadina">
            <button onClick={send}>CLICK</button>
        </div>
    )
}
export default Proba