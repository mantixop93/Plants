//first

var obj1 = {
    a: "1",
    b: 2,
    c: "3",
    d: {
        r: 5,
        k: 6
    }
}
var arr = [];
var i = 0;

for (var key in obj1) {
    arr[i] = key;
    i++;
    if (typeof (obj1[key]) === "object"){
        for (var secondKey in obj1[key]) {
            arr[i] = secondKey;
            i++;
        }
    }

}

console.log(arr);

//second
var obj2 = {
    x: 4,
    y: 5
}

for (var key in obj1) {
    obj2[key] = obj1[key];
}

console.log(JSON.stringify(obj2));


//third

var obj3 = {
    a: 44,
    b: 33,
    z: 10
}

var diff = {}

for (var key in obj1) {
    if (obj3[key] === undefined) {
        diff[key] = obj1[key];
    }
}

for (var key in obj3) {
    if (obj1[key] === undefined) {
        diff[key] = obj3[key];
    }
}

console.log(JSON.stringify(diff));

