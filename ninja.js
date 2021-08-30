class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

const ninja1 = new Ninja('Hyabusa', 20)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();