import {socket} from "../App";
import {useEffect, useState} from "react";
import './home.css'
import {useNavigate} from "react-router-dom";
var randomString = require('random-string');

const Home = () => {
    //ovo isto izbrisati
    const navigate = useNavigate()

    const send = () => {

        socket.emit('posalji', {poruka: "EVO ME", room:room})
    }
    const join = () => {

        if(room !== undefined) {
            socket.emit('join_room', room)
            //navigate(`/game/${room}`)
        }
    }

    const create = () => {
        socket.emit('create_room', createRoom)

    }
    const fShowCreate = () => {
        setShowCreate(false)

        setCreateRoom(randomString({length: 14,numeric: true,
            letters: true,
            special: false,}))
    }

    //ovo nam ne treba, izbrisati
    useEffect(()=> {
        socket.off('room_404').on('room_404', (room) => {
            alert(`Room ${room} doesn't exist!`)
        })
        socket.off('room_exist').on('room_exist', (data) => {
            //socket.emit('join_2', room)
            navigate(`/game/${data.room}/${data.pnumber}`)

        })
    }, [socket])
    const [room,setRoom] = useState()
    const [showJoin, setShowJoin] = useState(true)
    const [showCreate, setShowCreate] = useState(true)
    const [createRoom, setCreateRoom] = useState("")
    return (
        <div className="pozadina">
            <h1 className="header">LUDO KING</h1>
            {showJoin && showCreate?<div className="button-div">
                <button className="play-button">PLAY</button>
                <div className="margin-top-10">
                    <button className="room-button margin-right-10" onClick={()=> {setShowJoin(false)}}>JOIN</button>
                    <button className="room-button margin-left-10" onClick={fShowCreate}>CREATE</button>
                </div>
            </div> : !showJoin && showCreate ?
                <div className="join-room-div">
                    <input type="text" className="room-input" onChange={(event) => {setRoom(event.target.value)}}/>
                    <div className="margin-top-10">
                        <button className="room-button margin-right-10" onClick={join}>JOIN ROOM</button>
                        <button className="room-button" onClick={() => setShowJoin(true)}>BACK</button>
                    </div>

                </div> :
                <div className="join-room-div">
                    <input type="text" className="room-input" value={createRoom}/>
                    <div className="margin-top-10">
                        <button className="room-button margin-right-10" onClick={create}>CREATE</button>
                        <button className="room-button" onClick={() => setShowCreate(true)}>BACK</button>
                    </div>

                </div>
            }
        </div>
    )
}
export default Home