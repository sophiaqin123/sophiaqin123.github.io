function cat(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Cat";
    this.image="New Goal.png";
}

function fish(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Fish";
    this.image="New Goal.png";
}

function dog(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Dog";
    this.image="New Goal.png";
}


var animal = [new cat(), new dog(), new fish()]
var name = ["jane","kevin","lucas","flora","nealy","helen","vicky"]

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex)
}

function generateRandomName() {
    
}
