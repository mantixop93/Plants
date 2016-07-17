var arr = [new Date() ,new Date(2012, 1, 30), new Date(2013, 1, 30, 12), new Date(2013, 1, 30, 11), new Date(2026, 1, 30), new Date(2016, 1, 30), new Date()];

console.log(arr);

arr = arr.sort(function(a, b){
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(arr);

var obj = {}

for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    var key = current.getFullYear() + "-" + (current.getMonth() + 1) + "-" + current.getDate();
    
    if (obj[key] === undefined) {
        obj[key] = [];
    }
    
    obj[key].push(current.getHours() + ":" + current.getMinutes());
}

console.log(obj);