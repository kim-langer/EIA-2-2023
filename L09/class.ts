namespace L09 {

    export class Animal {
        animalType: string;
        food: string;
        sound: string;
        foodAmount: number;

        constructor(animalType: string, food: string, sound: string, foodAmount: number) {
            this.animalType = animalType;
            this.food = food;
            this.sound = sound;
            this.foodAmount = foodAmount;
        }

        async sing(): Promise<string> {
            return `${this.sound} ${this.sound} ...i'm singing all day long ${this.sound} ${this.sound} `;
        }

        async eat(): Promise<string> {
            this.foodAmount--;
            this.foodAmount--;
            this.foodAmount--;
            return `${this.animalType} is eating a lot of ${this.food}.`
        }

        getAmount(): number {
            return this.foodAmount;
        }
    }


    export class Cow extends Animal {
        constructor() {
            super("Cow", "Grass", "Muhh", 10);
        }
    }

    export class Chicken extends Animal {
        constructor() {
            super("Chicken", "Grains", "Cluck", 5);
        }
    }

    export class Pig extends Animal {
        constructor() {
            super("Pig", "Junk", "Oink", 8);
        }
    }

    export class Dog extends Animal {
        constructor() {
            super("Dog", "Meat", "Woof", 7);
        }
    }


}