class Dado {
    TirarDado(){
        return Math.ceil(Math.random()*6)
    }
}

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Tablero {
    constructor(jugador1, jugador2){
        this.casillas = 100;
        this.casillaJ1 = 0;
        this.casillaJ2 = 0;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }

    
    avanzar(dado){
        this.casillaJ1 += dado.TirarDado()
        this.casillaJ2 += dado.TirarDado()        

        // console.log(`El jugador ${this.jugador1.nombre} avanzo a la casilla ${this.casillaJ1} , y el  jugador ${this.jugador2.nombre} avanzo a la casilla ${this.casillaJ2} `)
    }

}

let dado = new Dado

let jugador1 = new Jugador('Jose')
let jugador2 = new Jugador('Pedro')

let tableroCorredor = new Tablero(jugador1,jugador2)

// let i = tableroCorredor.casillaJ1
// let f = tableroCorredor.casillaJ2


// tableroCorredor.avanzar(dado)

for (; 
    tableroCorredor.casillaJ1 < tableroCorredor.casillas && 
    tableroCorredor.casillaJ2 < tableroCorredor.casillas ; 
    tableroCorredor.avanzar(dado)){

    console.log(`El jugador ${tableroCorredor.jugador1.nombre} avanzo a la casilla ${tableroCorredor.casillaJ1}, y el jugador ${tableroCorredor.jugador2.nombre} avanzo a la casilla ${tableroCorredor.casillaJ2}`);

}

if (tableroCorredor.casillaJ2 >= tableroCorredor.casillas &&
    tableroCorredor.casillaJ1 < tableroCorredor.casillas)
    {
    console.log(`El jugador ${jugador2.nombre} ha ganado`)
}
else if(tableroCorredor.casillaJ1 >= tableroCorredor.casillas && 
    tableroCorredor.casillaJ2 < tableroCorredor.casillas){
    console.log(`El jugador ${jugador1.nombre} ha ganado`)
}else{
    console.log('Empate')
}