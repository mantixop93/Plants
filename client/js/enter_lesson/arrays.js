//first
var arr1 = [1,2,3,4,5,6];

for (var i = 0; i < arr1.length / 2; i++) {
    var temp;
    temp = arr1[i];
    arr1[i] = arr1[arr1.length - i - 1];
    arr1[arr1.length - i - 1] = temp;
}

console.log(arr1);


//second
var max = arr1[0];
var min = arr1[0];

for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
    
    if (arr1[i] < min) {
        min = arr1[i];
    }
}

console.log("Max " + max);
console.log("Min " + min)

//third
var arr = "1 2 -15 34 4 5 -4 a a a".split(" ");
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (!isNaN(+arr[i])) {
        sum = +arr[i] + sum;
    }
}

console.log(sum);

//third v2
var str = "1 2 -1a5 d34 4 5 -4 a a a";

for (var i = 0; i < str.length; i++) {
    var currentChar = str.charAt(i);
    if (isNaN(currentChar) && currentChar !== "-") {
        str = str.substr(0, i) + " " + str.substr(i+1, str.length);
    }
}


var arr = str.split(" ");
var sum = 0;

for (var i = 0; i < arr.length; i++) {
        sum = +arr[i] + sum;
}

console.log(str);
console.log(sum);

