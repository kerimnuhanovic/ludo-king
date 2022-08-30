const drawPlayer = (c, x, y, ctx, poljana, i, j) => {
    let mjerax = 50
    let mjeray = 60


    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x-mjerax, y-mjeray, x, y-mjeray);
    ctx.fillStyle = c;
    ctx.fill();

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x+mjerax, y-mjeray, x, y-mjeray);
    ctx.fillStyle = c;
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.moveTo(x, y-12);
    ctx.quadraticCurveTo(x-(mjerax-15), y-(mjeray-5), x, y-(mjeray-7));

    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y-12);
    ctx.quadraticCurveTo(x+(mjerax-15), y-(mjeray-5), x, y-(mjeray-7));
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

}

class Pijun {

    constructor(x,y, boja, initx, inity, aktivan, redniBroj) {
        this.mjeraW = 60;
        this.mjeraH = 45;
        this.radius = 25;
        this.x = x;
        this.y = y;
        this.boja = boja;
        this.initx = initx;
        this.inity = inity;
        this.aktivan = aktivan;
        this.redniBroj = redniBroj;
        this.uvediUKucicu();
        this.brojPredjenih = 0;
        this.pijunaNaPolju = 1
        this.zavrsen = false // provjeriti da li treba
        this.kretanjeGore = false
        this.kretanjeDole = false
        this.mjerax = 50
        this.mjeray = 60
        this.kretanje = false // ovo je dodano, izbrisati ako ne bude valjalo

    }
    draw(ctx, poljana) {
        //drawPlayer(this.boja, this.korijenx, this.korijeny,ctx, poljana, this.x, this.y);
        let x = this.korijenx
        let y = this.korijeny
        let c = this.boja

        //let mjerax = 50
        //let mjeray = 60

        if(!this.kretanje) {
            this.mjerax = 50
            this.mjeray = 60
        }

        if(poljana[this.x][this.y].length === 2 && !this.kretanje) {
            this.mjerax = 30
            this.mjeray = 40

        }
        else if(poljana[this.x][this.y].length === 3 && !this.kretanje) {
            this.mjerax = 25;
            this.mjeray = 35;
        }
        else if(poljana[this.x][this.y].length === 4 && !this.kretanje) {
            this.mjerax = 20;
            this.mjeray = 30;
        }

        /*if(this.kretanjeGore) {
            this.mjeray += 4
            this.mjerax = this.mjeray - 10
        }
        else if(this.kretanjeDole) {
            this.mjeray -= 4
            this.mjerax = this.mjeray - 10
        }*/
        /*if(this.kretanjeGore) {

            this.mjeray += 0.025*(this.mjerax+4)*(this.mjerax+4) - 3 * (this.mjerax+4) + 90
            this.mjerax = this.mjeray - 10
            console.log("Kretanje gore")
            console.log(this.mjerax)
            console.log(this.mjeray)
        }
        else if(this.kretanjeDole) {
            this.mjeray -= 0.025*(this.mjerax-4)*(this.mjerax-4) - 3 * (this.mjerax-4) + 90
            this.mjerax = this.mjeray - 10
            console.log("Kretanje dole")
            console.log(this.mjerax)
            console.log(this.mjeray)
        }*/
        let mjerax = this.mjerax
        let mjeray = this.mjeray
        //console.log(mjerax)
        //console.log(mjeray)

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x-mjerax, y-mjeray, x, y-mjeray);
        ctx.fillStyle = c;
        ctx.fill();

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x+mjerax, y-mjeray, x, y-mjeray);
        ctx.fillStyle = c;
        ctx.fill();
        ctx.stroke();



        ctx.beginPath();
        ctx.moveTo(x, y-12);
        ctx.quadraticCurveTo(x-(mjerax-15), y-(mjeray-5), x, y-(mjeray-7));

        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y-12);
        ctx.quadraticCurveTo(x+(mjerax-15), y-(mjeray-5), x, y-(mjeray-7));
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();

    }
    uvediUKucicu() {
        if(this.redniBroj === 2 || this.redniBroj === 4) {
            this.korijenx = this.mjeraW*this.initx+this.radius+10;
            this.korijeny = this.mjeraH*this.inity+this.radius+25;

        }
        else {
            this.korijenx = this.mjeraW*this.initx-this.radius-10;
            this.korijeny = this.mjeraH*this.inity+this.radius+25;

        }
        this.brojPredjenih = 0;
        this.aktivan = false
        this.x = 0
        this.y = 0
    }
    izvediIzKucice(igra) {
        if(igra === 1) {

            this.x = 1;
            this.y = 6;

        }
        else if(igra === 2) {
            this.x = 8;
            this.y = 1;
        }
        else if(igra === 4) {
            this.x = 6;
            this.y = 13;
        }
        else {

            this.x = 13;
            this.y = 8;
        }

        this.korijenx = this.mjeraW*this.x+this.mjeraW/2;
        this.korijeny = this.mjeraH*this.y+this.mjeraH/2;
        this.aktivan = true;
        return this;
    }
    async pomjeri(potez) {
        //console.log(this)
        let brojPomjerenih = 0
        if(this.brojPredjenih > 50) {
            if(this.brojPredjenih + potez > 56) {
                return
            }
            while(brojPomjerenih < potez) {
                if(this.boja === '#f20a15') {
                    this.x = await this.pomjeriZaJedan()
                    brojPomjerenih += 1
                }
                else if(this.boja === '#0af234') {
                    this.y = await this.pomjeriZaJedanDole()
                    brojPomjerenih += 1
                }
                else if(this.boja === '#141eb3') {
                    this.y = await this.pomjeriZaJedanGore()
                    brojPomjerenih += 1
                }
                else if(this.boja === '#eefa0a') {
                    this.x = await this.pomjeriZaJedanLijevo()
                    brojPomjerenih += 1
                }
                if(this.brojPredjenih === 56) {
                    this.aktivan = false
                    this.zavrsen = true
                }
            }

        }

        else if(this.brojPredjenih + potez > 50) {

            let pomocna = this.brojPredjenih
            if(this.boja === '#f20a15') {
                while(this.brojPredjenih < 49) {
                    this.x = await this.pomjeriZaJedanLijevo()
                    brojPomjerenih += 1
                }
                if(pomocna !== 50) {
                    this.y = await this.pomjeriZaJedanGore()
                    brojPomjerenih += 1
                }
                while(brojPomjerenih < potez) {
                    this.x = await this.pomjeriZaJedan()
                    brojPomjerenih += 1
                }

            }
            else if(this.boja === '#0af234') {
                while(this.brojPredjenih < 49) {
                    this.y = await this.pomjeriZaJedanGore()
                    brojPomjerenih += 1
                }
                if(pomocna !== 50) {
                    this.x = await this.pomjeriZaJedan()
                    brojPomjerenih += 1
                }
                while(brojPomjerenih < potez) {
                    this.y = await this.pomjeriZaJedanDole()
                    brojPomjerenih += 1
                }
            }
            else if(this.boja === '#141eb3') {
                while(this.brojPredjenih < 49) {
                    this.y = await this.pomjeriZaJedanDole()
                    brojPomjerenih += 1
                }
                if(pomocna !== 50) {
                    this.x = await this.pomjeriZaJedanLijevo()
                    brojPomjerenih += 1
                }
                while(brojPomjerenih < potez) {
                    this.y = await this.pomjeriZaJedanGore()
                    brojPomjerenih += 1
                }
            }
            else if(this.boja === '#eefa0a') {
                while(this.brojPredjenih < 49) {
                    this.x = await this.pomjeriZaJedan()
                    brojPomjerenih += 1
                }
                if(pomocna !== 50) {
                    this.y = await this.pomjeriZaJedanDole()
                    brojPomjerenih += 1
                }
                while(brojPomjerenih < potez) {
                    this.x = await this.pomjeriZaJedanLijevo()
                    brojPomjerenih += 1
                }
            }
        }



        else if((this.x + potez <=5 && this.y === 6) || (this.x>=9 && this.x+potez <= 14 && this.y === 6)) {
            //console.log(this)
            let pomocna = this.x;
            //this.x += potez
            while(this.x < pomocna + potez) {
                this.x = await this.pomjeriZaJedan();

            }

        }

        else if(this.x + potez > 5 && this.y === 6 && this.x <= 5) {
            let pomocna = this.x;
            //console.log(this)
            //this.x += potez
            while(this.x < 5) {
                this.x = await this.pomjeriZaJedan();
                brojPomjerenih += 1

            }
            //await this.pomjeriZaJedanGoreDesno()
            //4 linije ispod pomjeraju gore desno
            this.korijenx += this.mjeraW
            this.korijeny -= this.mjeraH
            this.x += 1
            this.y -= 1
            this.brojPredjenih += 1
            brojPomjerenih += 1
            while(brojPomjerenih < potez) {

                this.y = await this.pomjeriZaJedanGore()

                brojPomjerenih += 1
            }



        }

        else if(this.y === 6 && this.x >= 9 && this.x + potez > 14) {

            while(this.x < 14) {
                this.x = await this.pomjeriZaJedan()
                brojPomjerenih += 1
            }
            this.y = await this.pomjeriZaJedanDole()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            this.y = await this.pomjeriZaJedanDole()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            while(brojPomjerenih < potez) {
                this.x = await this.pomjeriZaJedanLijevo()
                brojPomjerenih += 1
            }

        }

        else if((this.x === 6 && this.y - potez >= 0 && this.y <=5) || (this.x === 6 && this.y - potez >= 9)) {

            let pomocna = this.y;
            //this.x += potez
            while(this.y > pomocna - potez) {
                this.y = await this.pomjeriZaJedanGore();

            }

        }
        else if(this.x === 6 && this.y - potez < 0) {
            while(this.y > 0) {
                this.y = await this.pomjeriZaJedanGore();
                brojPomjerenih += 1
            }
            this.x = await this.pomjeriZaJedan()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            this.x = await this.pomjeriZaJedan()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;

            while(brojPomjerenih < potez) {

                this.y = await this.pomjeriZaJedanDole()

                brojPomjerenih += 1
            }
        }

        else if(this.y === 0 && this.x === 7) {

            this.x = await this.pomjeriZaJedan()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            while(brojPomjerenih < potez) {
                this.y = await this.pomjeriZaJedanDole()
                brojPomjerenih += 1
            }
        }

        else if((this.x === 8 && this.y + potez <= 5) || (this.x === 8 && this.y >= 9 && this.y+potez <= 14)) {
            let pomocna = this.y;
            //this.x += potez
            while(this.y < pomocna + potez) {
                this.y = await this.pomjeriZaJedanDole();

            }

        }

        else if(this.x === 8 && this.y + potez > 5 && this.y <= 5) {//pogledat i iznad, potencijalni problemi sa preklapanjem uslova
            //mozda u uslov dodati i this.y <5

            while(this.y < 5) {
                this.y = await this.pomjeriZaJedanDole()
                brojPomjerenih += 1
            }

            //pomjera dole desno

            this.korijenx += this.mjeraW
            this.korijeny += this.mjeraH
            this.x += 1
            this.y += 1
            this.brojPredjenih += 1
            brojPomjerenih += 1

            while(brojPomjerenih < potez) {

                this.x = await this.pomjeriZaJedan()
                brojPomjerenih += 1

            }
        }

        else if((this.y === 8 &&  this.x - potez >= 9) || (this.y === 8 && this.x - potez >= 0 && this.x <= 5)) {
            let pomocna = this.x;

            while(this.x > pomocna - potez) {
                this.x = await this.pomjeriZaJedanLijevo();

            }

        }
        else if(this.y === 8 && this.x >= 9 && this.x - potez < 9) {
            while(this.x > 9) {
                this.x = await this.pomjeriZaJedanLijevo()
                brojPomjerenih += 1
            }

            //pomjera dole lijevo
            this.korijenx -= this.mjeraW
            this.korijeny += this.mjeraH
            this.x -= 1
            this.y += 1
            this.brojPredjenih += 1
            brojPomjerenih += 1

            while(brojPomjerenih < potez) {
                this.y = await this.pomjeriZaJedanDole()
                brojPomjerenih += 1
            }

        }

        else if(this.x === 8 && this.y >= 9 && this.y + potez > 14) {
            while(this.y < 14) {
                this.y = await this.pomjeriZaJedanDole()
                brojPomjerenih += 1
            }
            this.x = await this.pomjeriZaJedanLijevo()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return

            this.x = await this.pomjeriZaJedanLijevo()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            while(brojPomjerenih < potez) {
                this.y = await this.pomjeriZaJedanGore()
                brojPomjerenih += 1
            }
        }

        else if(this.x === 6 && this.y >= 9 && this.y - potez < 9) {
            while(this.y > 9) {
                this.y = await this.pomjeriZaJedanGore()
                brojPomjerenih += 1
            }

            //pomjera dole lijevo
            this.korijenx -= this.mjeraW
            this.korijeny -= this.mjeraH
            this.x -= 1
            this.y -= 1
            this.brojPredjenih += 1
            brojPomjerenih += 1

            while(brojPomjerenih < potez) {
                this.x = await this.pomjeriZaJedanLijevo()
                brojPomjerenih += 1
            }
        }
        else if(this.x === 14 && this.y === 7) {
            this.y = await this.pomjeriZaJedanDole()
            brojPomjerenih += 1
            while(brojPomjerenih < potez) {
                this.x = await this.pomjeriZaJedanLijevo()
                brojPomjerenih += 1
            }
        }
        else if(this.y === 8 && this.x <= 5 && this.x - potez < 0) {
            while(this.x > 0) {
                this.x = await this.pomjeriZaJedanLijevo()
                brojPomjerenih += 1
            }
            this.y = await this.pomjeriZaJedanGore()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return

            this.y = await this.pomjeriZaJedanGore()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return
            while(brojPomjerenih < potez) {
                this.x = await this.pomjeriZaJedan()
                brojPomjerenih += 1
            }

        }
        // uradit jos dva slucaja za x = 7 i y = 14 te za x = 0 i y = 7
        else if(this.x === 7 && this.y === 14) {
            this.x = await this.pomjeriZaJedanLijevo()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            while(brojPomjerenih < potez) {
                this.y = await this.pomjeriZaJedanGore()
                brojPomjerenih += 1
            }
        }
        else if(this.x === 0 && this.y === 7) {
            this.y = await this.pomjeriZaJedanGore()
            brojPomjerenih += 1
            if(brojPomjerenih === potez)
                return;
            while(brojPomjerenih < potez) {
                this.x = await this.pomjeriZaJedan()
                brojPomjerenih += 1
            }
        }
    }

    pomjeriZaJedan() {
        let pomocna = this.korijenx;
        this.brojPredjenih += 1
        this.kretanje = true
        return new Promise(resolve => {
            let id = setInterval(() => {
                /* ove stvari ispravit ujutro vezane za kretanjeGore, kretanjeDOle*/
                /*if(this.korijenx < pomocna + this.mjeraW/2) this.kretanjeGore = true
                else {this.kretanjeGore = false;this.kretanjeDole = true}*/


                /*if(this.korijenx < pomocna + this.mjeraW/2) this.korijeny += 1
                else {this.korijeny -= 1}*/

                if(this.korijenx < pomocna +5) {
                    this.mjerax = 50
                    this.mjeray = 60
                }
                else if(this.korijenx < pomocna +10) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10

                }
                else if(this.korijenx < pomocna +15) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx < pomocna +20) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx < pomocna +25) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijenx < pomocna +35) {//srednji
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2 +
                        (0.025*58*58 - 3*58 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijenx < pomocna +40) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijenx < pomocna +45) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx < pomocna +50) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx < pomocna +55) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else {
                    this.mjerax = 50
                    this.mjeray = 60
                }







                if(this.korijenx < pomocna+this.mjeraW) {
                    this.korijenx += 1.3;
                }
                else {
                    this.kretanjeDole = false
                    this.kretanjeGore = false
                    this.mjerax = 50
                    this.mjeray = 60
                    this.kretanje = false
                    this.korijenx = pomocna + this.mjeraW;

                    resolve(this.x+1);
                    clearInterval(id);


                }
            }, 5)
        });

    }


    pomjeriZaJedanGore() {
        let pomocna = this.korijeny;
        this.brojPredjenih += 1
        this.kretanje = true
        return new Promise(resolve => {
            let id = setInterval(() => {

                if(this.korijeny > pomocna-4) {
                    this.mjerax = 50
                    this.mjeray = 60
                }
                else if(this.korijeny > pomocna-8) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10

                }
                else if(this.korijeny > pomocna-12) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny > pomocna-16) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny > pomocna-20) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijeny > pomocna-28) {//srednji
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2 +
                        (0.025*58*58 - 3*58 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijeny > pomocna-32) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijeny > pomocna-36) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny > pomocna-40) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny > pomocna-44) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else {
                    this.mjerax = 50
                    this.mjeray = 60
                }

                if(this.korijeny > pomocna-this.mjeraH) {
                    this.korijeny -= 1.1;
                }
                else {
                    this.kretanje = false
                    this.korijeny = pomocna - this.mjeraH;
                    resolve(this.y-1);
                    clearInterval(id);


                }
            }, 5)
        });
    }
    pomjeriZaJedanGoreDesno() {//ovo dalje razraditi
        let pomocnay = this.korijeny;
        let pomocnax = this.korijenx;
        return new Promise(resolve => {
            let id = setInterval(() => {

                if(this.korijeny >= pomocnay-this.mjeraH && this.korijenx <= pomocnax + this.mjeraW) {
                    this.korijenx += 1;//ispravit
                    this.korijeny = 0.75*this.korijenx-45;
                }
                else {
                    //this.korijeny = pomocnay - this.mjeraH;
                    //this.korijenx = pomocnax + this.mjeraW;
                    this.x += 1
                    this.y -= 1
                    resolve([this.x+1,this.y-1]);

                    clearInterval(id);


                }
            }, 5)
        });
    }

    pomjeriZaJedanDole() {
        let pomocna = this.korijeny;
        this.brojPredjenih += 1
        this.kretanje = true
        return new Promise(resolve => {
            let id = setInterval(() => {



                if(this.korijeny < pomocna+4) {
                    this.mjerax = 50
                    this.mjeray = 60
                }
                else if(this.korijeny < pomocna+8) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10

                }
                else if(this.korijeny < pomocna+12) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny < pomocna+16) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny < pomocna+20) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijeny < pomocna+28) {//srednji
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2 +
                        (0.025*58*58 - 3*58 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijeny < pomocna+32) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijeny < pomocna+36) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny < pomocna+40) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijeny < pomocna+44) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else {
                    this.mjerax = 50
                    this.mjeray = 60
                }


                if(this.korijeny < pomocna+this.mjeraH) {
                    this.korijeny += 1.1;
                }
                else {
                    this.kretanje = false
                    this.korijeny = pomocna + this.mjeraH;
                    resolve(this.y+1);
                    clearInterval(id);


                }
            }, 5)
        });
    }

    pomjeriZaJedanLijevo() {
        let pomocna = this.korijenx;
        this.brojPredjenih += 1
        this.kretanje = true
        return new Promise(resolve => {
            let id = setInterval(() => {

                if(this.korijenx > pomocna - 5) {
                    this.mjerax = 50
                    this.mjeray = 60
                }
                else if(this.korijenx > pomocna -10) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10

                }
                else if(this.korijenx > pomocna -15) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx > pomocna -20) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx > pomocna -25) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijenx > pomocna -35) {//srednji
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2 +
                        (0.025*58*58 - 3*58 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijenx > pomocna - 40) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2 +
                        (0.025*56*56 - 3*56 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else if(this.korijenx > pomocna -45) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2 +
                        (0.025*54*54 - 3*54 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx > pomocna -50) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2 +
                        (0.025*52*52 - 3*52 + 90)*2
                    this.mjeray = this.mjerax + 10
                }
                else if(this.korijenx > pomocna -55) {
                    this.mjerax = 50 + (0.025*50*50 - 3*50 + 90)*2
                    this.mjeray = this.mjerax+10
                }
                else {
                    this.mjerax = 50
                    this.mjeray = 60
                }
                if(this.korijenx > pomocna-this.mjeraW) {
                    this.korijenx -= 1.3;
                }
                else {
                    this.kretanje = false
                    this.korijenx = pomocna - this.mjeraW;

                    resolve(this.x-1);
                    clearInterval(id);


                }
            }, 5)
        });

    }


}

export default Pijun