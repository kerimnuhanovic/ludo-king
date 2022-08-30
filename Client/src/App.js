import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Game from "./Game/Game";
import Proba from "./Game/Proba";
import io from 'socket.io-client'
import Home from "./Home/Home";
export const socket = io.connect('http://localhost:3001/')

function App() {


    // uraditi i da kada se pojede pijun, da ima jos potez jedan, te kada udje u kucu
    //

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game/:room/:pnumber" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
