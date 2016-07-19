//first
var fruits = ["apple", "orange", "pineapple", "banana"].toString();
var fruitsArr = [];
var i = 0;

while (fruits.indexOf(",") !== -1) {
    fruitsArr[i] =fruits.substr(0, fruits.indexOf(","));
    fruits = fruits.slice(fruits.indexOf(",") + 1, fruits.length);
    i++;
}
fruitsArr[i] = fruits;
 
console.log(fruitsArr);
 
// second
var str = "aSD adwgadahwd awdawd";
str = str.toLowerCase();
for (var i = 0; i < str.length; i++) {
    if ((i === 0) || (str[i-1] === " ")) {
        str = str.substr(0, i-1) + " " + str.charAt(i).toUpperCase() + str.substr(i+1, str.length);
    }
}
str = str.slice(1, str.length);

console.log(str);


//third
var str2 = "123456789"
var newStr = "";
for (var i = 0; i <= str2.length; i++) {
    newStr = newStr + str2.charAt(str2.length - i);
}
console.log(newStr);