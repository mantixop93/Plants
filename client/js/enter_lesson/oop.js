//first

function Son(){
    this.a = 10;
}

function Dad() {
    this.b = 20;
}

function Grandpa() {
    this.c = 30;
    this.say = function() {
        console.log("Hello");
    }
}

Dad.prototype = new Grandpa();
Son.prototype = new Dad();

var son = new Son();
var grandpa = new Grandpa();
son.say();
console.log(son instanceof Grandpa);

//second

function MyGrandpa() {
    this.sayHello = function() {
        console.log("Hello");
    }
}

function MyDad() {
    MyGrandpa.apply(this, arguments);
    this.sayHi = function () {
        console.log("Hi")
    }
}

function MySon() {
    MyDad.apply(this,arguments);
    this.sayGoodBye = function() {
        console.log("Goodbye")
    }
}

var mySon = new MySon();
mySon.sayGoodBye();
mySon.sayHi();
mySon.sayHello();

console.log(mySon instanceof MyGrandpa);