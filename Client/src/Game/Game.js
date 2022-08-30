import {useEffect, useRef, useState} from "react";
import drawField from "../Helper/helper";
import Pijun from "../Helper/Pijun";
import './game.css'
import profile from '../Images/profile2.png'
import dice1 from '../Images/dice_1.png'
import dice2 from '../Images/dice_2.png'
import dice3 from '../Images/dice_3.png'
import dice4 from '../Images/dice_4.png'
import dice5 from '../Images/dice_5.png'
import dice6 from '../Images/dice_6.png'
import Poljana from "../Helper/Poljana";
import {socket} from "../App";
import {useParams} from "react-router-dom";

const Game = () => {
    const c = useRef(null)
    const ctx = useRef(null)

    const loadingc = useRef(null)

    const xPocetakCanvasa = 248;
    const yPocetakCanvasa = 0;

    const mjeraW = 60;
    const mjeraH = 45;
    const radius = 25;

    const potez = useRef(1)

    //const [igrac,setIgrac] = useState(1)
    const igrac = useRef(1)
    const kockaBacena = useRef(false)

    const crveni1 = useRef(new Pijun(0,0,'#f20a15', 3,1,false, 1))
    const crveni2 = useRef(new Pijun(0,0,'#f20a15', 3,1,false, 2))
    const crveni3 = useRef(new Pijun(0,0,'#f20a15', 3,3,false, 3))
    const crveni4 = useRef(new Pijun(0,0,'#f20a15', 3,3,false, 4))

    const zeleni1 = useRef(new Pijun(0,0,'#0af234', 12,1,false, 1))
    const zeleni2 = useRef(new Pijun(0,0,'#0af234', 12,1,false, 2))
    const zeleni3 = useRef(new Pijun(0,0,'#0af234', 12,3,false, 3))
    const zeleni4 = useRef(new Pijun(0,0,'#0af234', 12,3,false, 4))

    const plavi1 = useRef(new Pijun(0,0,'#141eb3', 3,10,false, 1))
    const plavi2 = useRef(new Pijun(0,0,'#141eb3', 3,10,false, 2))
    const plavi3 = useRef(new Pijun(0,0,'#141eb3', 3,12,false, 3))
    const plavi4 = useRef(new Pijun(0,0,'#141eb3', 3,12,false, 4))

    const zuti1 = useRef(new Pijun(0,0,'#eefa0a', 12,10,false, 1))
    const zuti2 = useRef(new Pijun(0,0,'#eefa0a', 12,10,false, 2))
    const zuti3 = useRef(new Pijun(0,0,'#eefa0a', 12,12,false, 3))
    const zuti4 = useRef(new Pijun(0,0,'#eefa0a', 12,12,false, 4))

    const matricaPijuna = useRef([[crveni1.current,crveni2.current,crveni3.current,crveni4.current],
        [zeleni1.current,zeleni2.current,zeleni3.current,zeleni4.current],
    [zuti1.current,zuti2.current,zuti3.current,zuti4.current], [plavi1.current,plavi2.current,plavi3.current,plavi4.current]]);

    const brojAktivnih = useRef([0,0,0,0])
    const poljana = useRef(new Poljana())

    const redniBrojIgraca = useRef()

    const crtajPijune = () => {
        {/*
        crveni1.current.draw(ctx.current);

        crveni2.current.draw(ctx.current);
        crveni3.current.draw(ctx.current);
        crveni4.current.draw(ctx.current);

        zeleni1.current.draw(ctx.current);
        zeleni2.current.draw(ctx.current);
        zeleni3.current.draw(ctx.current);
        zeleni4.current.draw(ctx.current);

        plavi1.current.draw(ctx.current);
        plavi2.current.draw(ctx.current);
        plavi3.current.draw(ctx.current);
        plavi4.current.draw(ctx.current);


        zuti1.current.draw(ctx.current);
        zuti2.current.draw(ctx.current);
        zuti3.current.draw(ctx.current);
        zuti4.current.draw(ctx.current); */}
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                matricaPijuna.current[i][j].draw(ctx.current, poljana.current.poljana)
            }
        }
    }
    const [rendHelp, setRendHelp] = useState(0)
    const requestRef = useRef();
    const usao = useRef(false)
    const trajeKretnja = useRef(false)
    const kliknutoNaPijuna = useRef(false)
    const sec = useRef(0)
    const draw = () => {

        requestRef.current = requestAnimationFrame(draw);
        ctx.current.clearRect(0,0,c.current.width,c.current.height);
        sec.current = (sec.current + 1) % 27
        drawField(ctx.current,mjeraW,mjeraH,radius, sec.current, igrac.current)
        crtajPijune();
        //console.log("OK")

    }
    const [wait,setWait] = useState(true)
    useEffect(() => {
        console.log("USE EFFECT AAAAA")
        redniBrojIgraca.current = parseInt(pnumber)
        if(redniBrojIgraca.current === 4) {
            setWait(false)
            socket.emit('start', room)
            //return
        }
        console.log(redniBrojIgraca.current)
        if(wait) return
        if(c.current) {
            ctx.current = c.current.getContext('2d');
        }
        c.current.width = 900;
        c.current.height = 675;
        console.log("USE EFFECT")

        console.log("POLJANA")
        console.log(poljana.current)
        c.current.addEventListener('click', (event) => {
            socket.emit('potez_klik', {x:event.x,y:event.y, room:room})
            potezKlik(event.x,event.y)


        })


        requestRef.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(requestRef.current);

    }, [wait])

    useEffect(() => {
        /*socket.off('dodijeli_redni_broj').on('dodijeli_redni_broj', (data) => {
            alert("OKEJ")
            redniBrojIgraca.current = data
            console.log(redniBrojIgraca.current)
        })*/
        socket.off('odigraj').on('odigraj', (data) => {
            console.log("USAO U ODIGRAJ SOCKET")
            if(data.kocka === 1)
                zavrtiKocku(setKocka1, data.kocka, true, data.potez)
            else if(data.kocka === 2)
                zavrtiKocku(setKocka3, data.kocka, true, data.potez)
            else if(data.kocka === 3)
                zavrtiKocku(setKocka4, data.kocka, true, data.potez)
            else if(data.kocka === 4)
                zavrtiKocku(setKocka2, data.kocka, true, data.potez)
        })
        socket.off('odigraj_klik').on('odigraj_klik', (data)=> {

            potezKlik(data.x,data.y)
        })
        socket.off('start_game').on('start_game', () => {
            setWait(false)
        })
    }, [socket])

    const bla = useRef(0)
    const [kocka1, setKocka1] = useState(dice1)
    const [kocka2, setKocka2] = useState(dice1)
    const [kocka3, setKocka3] = useState(dice1)
    const [kocka4, setKocka4] = useState(dice1)
    const {room, pnumber} = useParams()
    const zavrtiKocku = (setKocka, kocka, server = false, potez1 = -1) => {

        if(kockaBacena.current || trajeKretnja.current) {
            console.log("USAO u prvi if")

            return;
        }

        if(kocka !== igrac.current) { //|| igrac.current !== redniBrojIgraca.current - ovo dodati
            console.log("USAO u drugi if")
            console.log(kocka)
            console.log(igrac.current)
            return;
        }
        if(!server && kocka !== redniBrojIgraca.current) {

            console.log("USAO u treci if")
            console.log(kocka)
            console.log(redniBrojIgraca.current)
            return // provjeriti uslove iznad

        }
        if(!server) {
            potez.current = Math.floor(1+Math.random() * 6);
            setTimeout(() => {setKocka(dice1)},0)
            setTimeout(() => {setKocka(dice2)},100)
            setTimeout(() => {setKocka(dice3)},200)
            setTimeout(() => {setKocka(dice4)},300)
            setTimeout(() => {setKocka(dice5)},400)
            setTimeout(() => {setKocka(dice6)},500)

            socket.emit('potez', {room: room, kocka: kocka, potez:potez.current})

        }
        else {
            potez.current = potez1
            setTimeout(() => {setKocka(dice1)},0)
            setTimeout(() => {setKocka(dice2)},100)
            setTimeout(() => {setKocka(dice3)},200)
            setTimeout(() => {setKocka(dice4)},300)
            setTimeout(() => {setKocka(dice5)},400)
            setTimeout(() => {setKocka(dice6)},500)
        }

        //potez = Math.random()
        //if(potez >= 0.5)
        //    potez = 6
        //else potez = 3
        //potez.current = 6
        if(potez.current === 1)
            setTimeout(() => {setKocka(dice1)}, 600)
        else if(potez.current===2)
            setTimeout(() => {setKocka(dice2)}, 600)
        else if(potez.current===3)
            setTimeout(() => {setKocka(dice3)}, 600)
        else if(potez.current===4)
            setTimeout(() => {setKocka(dice4)}, 600)
        else if(potez.current===5)
            setTimeout(() => {setKocka(dice5)}, 600)
        else setTimeout(() => {setKocka(dice6)}, 600)

        setTimeout(() => {odigrajPotez()}, 800)
    }

    const odigrajPotez = () => {
        //const novi = [...matricaPijuna];


        if(brojAktivnih.current[igrac.current-1] === 0 && potez.current === 6) {
            //mozda i ovdje treba pomjeranje korjena na pocetak
            matricaPijuna.current[igrac.current-1][0].izvediIzKucice(igrac.current)
            console.log(matricaPijuna.current[igrac.current-1][0]) //dodana linija ispod, provjerit
            poljana.current.pomjeriKorjenePijunaNaPocetak(matricaPijuna.current[igrac.current-1][0].x,matricaPijuna.current[igrac.current-1][0].y)
            poljana.current.dodaj(matricaPijuna.current[igrac.current-1][0])
            poljana.current.pomjeriKorjenePijuna(matricaPijuna.current[igrac.current-1][0].x,matricaPijuna.current[igrac.current-1][0].y)

            //setMatricaPijuna(novi);

            brojAktivnih.current[igrac.current-1] += 1


        }
        else if(brojAktivnih.current[igrac.current-1] === 1 && potez.current !== 6) {

            for(let i = 0; i < 4; i++) {
                if(matricaPijuna.current[igrac.current-1][i].aktivan) {
                    console.log("POCINJE")
                    console.log(matricaPijuna.current)

                    poljana.current.pomjeriKorjenePijunaNaPocetak(matricaPijuna.current[igrac.current-1][i].x,matricaPijuna.current[igrac.current-1][i].y)

                    poljana.current.obrisi(matricaPijuna.current[igrac.current-1][i])
                    poljana.current.pomjeriKorjenePijuna(matricaPijuna.current[igrac.current-1][i].x,matricaPijuna.current[igrac.current-1][i].y)
                    //mozda i ovdje treba dodati
                    const kopija = matricaPijuna.current[igrac.current-1][i]
                    const ik = igrac.current-1
                    const jk = i
                    trajeKretnja.current = true
                    matricaPijuna.current[igrac.current-1][i].pomjeri(potez.current).then(() =>
                        {console.log(matricaPijuna.current)

                         console.log(kopija)

                         provjeraKolizije(kopija, ik, jk)

                         poljana.current.pomjeriKorjenePijunaNaPocetak(kopija.x,kopija.y)
                         poljana.current.dodaj(kopija)

                         poljana.current.pomjeriKorjenePijuna(kopija.x,kopija.y)

                         igrac.current = (igrac.current % 4)+1
                         trajeKretnja.current = false
                        }
                    )
                    //setMatricaPijuna(novi)
                }
            }

        }

        else if(brojAktivnih.current[igrac.current-1] === 0 && potez.current !== 6){
            console.log("USAOOO U POVECANJE IGRACA")
            igrac.current = (igrac.current % 4)+1
        }
        else {
            kockaBacena.current = true
        }


    }

    const potezKlik = (x,y) => {
        const klikx = x-xPocetakCanvasa;
        const kliky = y - yPocetakCanvasa;

        //const novi = [...matricaPijuna]

        if(kockaBacena.current) {//dodat uslov da onaj koji klikce da je trenutni igrac
            console.log("USAO U IFFFF")
            usao.current = false
            for(let j = 0; j < 4; j++) {
                if(klikx >= matricaPijuna.current[igrac.current-1][j].korijenx - radius-5 && klikx <= matricaPijuna.current[igrac.current-1][j].korijenx+radius+5 &&
                    kliky >= matricaPijuna.current[igrac.current-1][j].korijeny-radius-5 &&
                    kliky <= matricaPijuna.current[igrac.current-1][j].korijeny + radius) {
                    //alert("NASAO KLIKNUTOG PIJUNA")
                    kliknutoNaPijuna.current = true

                    if(potez.current === 6) {
                        if(!matricaPijuna.current[igrac.current-1][j].aktivan) {
                            //alert("USAO U NEAKTIVNOG")
                            matricaPijuna.current[igrac.current-1][j].izvediIzKucice(igrac.current);
                            poljana.current.pomjeriKorjenePijunaNaPocetak(matricaPijuna.current[igrac.current-1][j].x,matricaPijuna.current[igrac.current-1][j].y)
                            poljana.current.dodaj(matricaPijuna.current[igrac.current-1][j])
                            poljana.current.pomjeriKorjenePijuna(matricaPijuna.current[igrac.current-1][j].x,matricaPijuna.current[igrac.current-1][j].y)
                            brojAktivnih.current[igrac.current-1] += 1
                            //kockaBacena.current = false
                            //return

                        }
                        else {
                            //alert("USAO U AKTIVNOG")
                            //mozda treba awaitat liniju ispod
                            console.log("POCINJE")
                            console.log(matricaPijuna.current)
                            // dodati ako je na polju dva elementa da mu sniti ili poveca
                            poljana.current.pomjeriKorjenePijunaNaPocetak(matricaPijuna.current[igrac.current-1][j].x,matricaPijuna.current[igrac.current-1][j].y)
                            const kopija = matricaPijuna.current[igrac.current-1][j]
                            const ik = igrac.current-1
                            const jk = j
                            poljana.current.obrisi(matricaPijuna.current[igrac.current-1][j])
                            //ovdje dodati pomjeirkorjenepijuna
                            poljana.current.pomjeriKorjenePijuna(matricaPijuna.current[igrac.current-1][j].x,matricaPijuna.current[igrac.current-1][j].y)
                            usao.current = true
                            trajeKretnja.current = true
                            matricaPijuna.current[igrac.current-1][j].pomjeri(potez.current).then(() => {
                                console.log(matricaPijuna.current)

                                provjeraKolizije(kopija, ik, jk)
                                poljana.current.pomjeriKorjenePijunaNaPocetak(kopija.x,kopija.y)
                                poljana.current.dodaj(kopija)
                                poljana.current.pomjeriKorjenePijuna(kopija.x,kopija.y)
                                //  kockaBacena.current = false
                                trajeKretnja.current = false

                            })


                        }
                    }
                    else {
                        console.log("POCINJE")
                        console.log(matricaPijuna.current)
                        const kopija = matricaPijuna.current[igrac.current-1][j]
                        const ik = igrac.current-1
                        const jk = j
                        poljana.current.pomjeriKorjenePijunaNaPocetak(matricaPijuna.current[igrac.current-1][j].x,matricaPijuna.current[igrac.current-1][j].y)

                        poljana.current.obrisi(matricaPijuna.current[igrac.current-1][j])
                        poljana.current.pomjeriKorjenePijuna(matricaPijuna.current[igrac.current-1][j].x,matricaPijuna.current[igrac.current-1][j].y)
                        usao.current = true
                        console.log("Igrac")
                        console.log(igrac.current)
                        trajeKretnja.current = true
                        matricaPijuna.current[igrac.current-1][j].pomjeri(potez.current).then(() => {
                            console.log(matricaPijuna.current)
                            console.log(igrac.current)

                            provjeraKolizije(kopija, ik, jk)
                            poljana.current.pomjeriKorjenePijunaNaPocetak(kopija.x,kopija.y)
                            poljana.current.dodaj(kopija)
                            poljana.current.pomjeriKorjenePijuna(kopija.x,kopija.y)
                            //kockaBacena.current = false
                            //igrac.current = (igrac.current % 4)+1
                            bla.current += 1
                            console.log("BLA")
                            console.log(bla.current)
                            trajeKretnja.current = false
                        })


                    }
                    //setMatricaPijuna(novi)
                }

                if(usao.current) {

                    break;
                }
            }


            //    kockaBacena.current = false
            //if(potez.current !== 6) {
            //    igrac.current = (igrac.current % 4)+1
            //}
        }
        if(kliknutoNaPijuna.current) {
            kockaBacena.current = false
            if(potez.current !== 6) {
                igrac.current = (igrac.current % 4)+1
            }
            kliknutoNaPijuna.current = false
        }
    }


    const provjeraKolizije = (pijun, ki, kj) => {
        console.log("PROVJERA KOLIZIJE")
        console.log(pijun)
        console.log(ki)
        console.log(kj)
        console.log(poljana.current.poljana[pijun.x][pijun.y].length)
        console.log("KRAJ PROVJERE")

        if((pijun.x === 1 && pijun.y === 6) || (pijun.x === 8 && pijun.y === 1) ||
        (pijun.x === 13 && pijun.y === 8) || (pijun.x === 6 && pijun.y === 13) ||
            (poljana.current.poljana[pijun.x][pijun.y].length !== 1)) {
            //prvojeriti ovo sa poljanom || (poljana.current[pijun.x][pijun.y].length !== 1)
            return;
        }

        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                if(pijun.x === matricaPijuna.current[i][j].x &&
                    pijun.y === matricaPijuna.current[i][j].y &&
                    pijun.boja !== matricaPijuna.current[i][j].boja &&
                    (ki !== i || kj !== j)) {

                    poljana.current.obrisi(matricaPijuna.current[i][j])
                    matricaPijuna.current[i][j].uvediUKucicu()
                    brojAktivnih.current[i] -= 1
                }
                else if(pijun.x === matricaPijuna.current[i][j].x &&
                    pijun.y === matricaPijuna.current[i][j].y &&
                    pijun.boja === matricaPijuna.current[i][j].boja &&
                    (ki !== i || kj !== j)) {

                }
                else {
                    console.log("POCETAK ELSA")
                    console.log(pijun.x)
                    console.log(matricaPijuna.current[i][j].x)
                    console.log(pijun.y)
                    console.log(matricaPijuna.current[i][j].y)
                    console.log(pijun.boja)
                    console.log(matricaPijuna.current[i][j].boja)
                    console.log(ki)
                    console.log(i)
                    console.log(kj)
                    console.log(j)
                    console.log("KRAJ ELSA")
                }
            }
        }

    }

    if(!wait) return (

        <div className="okvir">
            <div className="players-div">
                <div className="player">
                    <div className="okvir-slike crveni-okvir-profilna">
                        <img src={profile}/>
                    </div>

                        <div className="okvir-kocke crveni-okvir-kocka">
                            <div className="okv" onClick={() => {zavrtiKocku(setKocka1,1)}}>
                                <img src={kocka1}/>
                            </div>
                        </div>

                </div>
                <div className="player">
                    <div className="okvir-slike plavi-okvir-profilna">
                        <img src={profile}/>
                    </div>

                    <div className="okvir-kocke plavi-okvir-kocka">
                        <div className="okv" onClick={() => {zavrtiKocku(setKocka2,4)}}>
                            <img src={kocka2}/>
                        </div>
                    </div>

                </div>
            </div>
            <canvas id="myCanvas" ref={c}/>
            <div className="players-div">
                <div className="player">
                    <div className="okvir-slike zeleni-okvir-profilna">
                        <img src={profile}/>
                    </div>

                    <div className="okvir-kocke zeleni-okvir-kocka">
                        <div className="okv" onClick={() => {zavrtiKocku(setKocka3,2)}}>
                            <img src={kocka3}/>
                        </div>
                    </div>

                </div>

                <div className="player">
                    <div className="okvir-slike zuti-okvir-profilna">
                        <img src={profile}/>
                    </div>

                    <div className="okvir-kocke zuti-okvir-kocka">
                        <div className="okv" onClick={() => {zavrtiKocku(setKocka4,3)}}>
                            <img src={kocka4}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    else return (
        <div className="loading-okvir">
            <h1 className="wait-header">Waiting for players...</h1>
            {/*<canvas ref={loadingc}/>*/}
        </div>
    )

}
export default Game