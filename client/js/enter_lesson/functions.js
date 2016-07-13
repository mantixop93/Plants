// //first

// function sum() {
//     return this.a + this.b;
// }

// var a = 100;
// var b = 90;

// var obj = {
//     a : 10,
//     sum : new Function("", "return this.a + this.b")
// }

// console.log(obj.sum());


// function test() {
//     var a = 1;
//     var b = 2;
//     var fun = new Function("", "return this.a + this.b");
//     console.log(fun());
// }

// test();

// function makeCounter() {
//     var currentCount = 1;
    
//     return function() {
//         return currentCount++;
//     }
// }
// var a = makeCounter();
// console.log(a())
// console.log(a())


// function save(a) {
//     return function() {
//         return a;
//     }
// }

// var arr = [];

// for (var i = 0; i < 10; i++) {
//     arr[i] = save(i);
// }

// for (var i = 0; i < 10; i++) {
//     console.log(arr[i]());
// }

function sum(a, b) {
    if (b === undefined) {
        return function (b) {
            return a + b;
        };
    } else {
        return a + b; 
    }
}

console.log(sum(10, 20));
console.log(sum(10)(90));