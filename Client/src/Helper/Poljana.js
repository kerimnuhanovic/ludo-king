class Poljana {
    constructor() {
        this.poljana = [[[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]],
            [[], [], [], [], [], [], [], [], [],[], [],[],[],[],[]]]
    }
    dodaj (pijun) {
        this.poljana[pijun.x][pijun.y].push(pijun)
    }
    obrisi(pijun) {
        for(let i = 0; i < this.poljana[pijun.x][pijun.y].length; i++) {
            if(this.poljana[pijun.x][pijun.y][i] === pijun) {
                this.poljana[pijun.x][pijun.y].splice(i,1)
                console.log("BRISE ELEMENT IZ POLJANE")
                return
            }
        }
    }
    pomjeriKorjenePijuna(x,y) {
        if(this.poljana[x][y].length === 2) {
            this.poljana[x][y][0].korijenx -= 10
            this.poljana[x][y][1].korijenx += 10

        }
        else if(this.poljana[x][y].length === 3) {
            this.poljana[x][y][0].korijenx -= 15
            this.poljana[x][y][2].korijenx += 15
        }
        else if(this.poljana[x][y].length === 4) {
            this.poljana[x][y][0].korijenx -= 20
            this.poljana[x][y][1].korijenx -= 5
            this.poljana[x][y][2].korijenx += 5
            this.poljana[x][y][3].korijenx += 20
        }
    }
    pomjeriKorjenePijunaNaPocetak(x,y) {
        if(this.poljana[x][y].length === 2) {
            this.poljana[x][y][0].korijenx += 10
            this.poljana[x][y][1].korijenx -= 10
        }
        else if(this.poljana[x][y].length === 3) {

            this.poljana[x][y][0].korijenx += 15
            this.poljana[x][y][2].korijenx -= 15
        }
        else if(this.poljana[x][y].length === 4) {
            this.poljana[x][y][0].korijenx += 20
            this.poljana[x][y][1].korijenx += 5
            this.poljana[x][y][2].korijenx -= 5
            this.poljana[x][y][3].korijenx -= 20
        }
    }
}

export default Poljana