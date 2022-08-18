class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        this.nombre;
    }
    showStats() {
        this.nombre,
        this.fuerza,
        this.velocidad,
        this.salud;
    }
    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria) {
        super(nombre)
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom () {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
        }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

console.log(superSensei)
