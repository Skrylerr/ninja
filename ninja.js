class Ninja {
    constructor(nombre, salud, velocidad, fuerza ) {
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
        this.salud = 10;
    }
}


const ninja1 = new Ninja("kawazaki");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log(ninja1)
