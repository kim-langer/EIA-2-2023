var L09;
(function (L09) {
    class Animal {
        animalType;
        food;
        sound;
        foodAmount;
        constructor(animalType, food, sound, foodAmount) {
            this.animalType = animalType;
            this.food = food;
            this.sound = sound;
            this.foodAmount = foodAmount;
        }
        async sing() {
            return `${this.sound} ${this.sound} ...i'm singing all day long ${this.sound} ${this.sound} `;
        }
        async eat() {
            this.foodAmount--;
            this.foodAmount--;
            this.foodAmount--;
            return `${this.animalType} is eating a lot of ${this.food}.`;
        }
        getAmount() {
            return this.foodAmount;
        }
    }
    L09.Animal = Animal;
    class Cow extends Animal {
        constructor() {
            super("Cow", "Grass", "Muhh", 10);
        }
    }
    L09.Cow = Cow;
    class Chicken extends Animal {
        constructor() {
            super("Chicken", "Grains", "Cluck", 5);
        }
    }
    L09.Chicken = Chicken;
    class Pig extends Animal {
        constructor() {
            super("Pig", "Junk", "Oink", 8);
        }
    }
    L09.Pig = Pig;
    class Dog extends Animal {
        constructor() {
            super("Dog", "Meat", "Woof", 7);
        }
    }
    L09.Dog = Dog;
})(L09 || (L09 = {}));
//# sourceMappingURL=class.js.map