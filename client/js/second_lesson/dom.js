// //first

// var divs = document.getElementsByTagName("div") 

// for (var i = 0; i < divs.length; i++) {
//     console.log(divs[i].innerHTML);
// }

// //second

// var links = document.querySelectorAll("a");

// links.forEach(function(current) {
//     console.log(current.innerHTML);    
// })

// //third

// var newNode = document.createTextNode("Hello Node");

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(newNode);

// //4
// console.log(body.children[0]);
// for (var i = 0; i < 10; i++) {
//     body.insertBefore(divs[0].cloneNode(true), body.children[0]);
// }


var obj = {
    item1: "String",
    item2: {
        item1: "String",
        item2: {
            item1: "String",
            item2: "String"
        }
    },
    item3: "String",
    item4: {
        item1: "String",
        item2: {
            item1: "String",
            item2:  {
                item1: "String",
                item2: {
                    item1: "String",
                    item2: "String"
                }
            }
        }
    },
    item5: "String",
    item6: {
        item1: "String",
        item2: {
            item1: "String",
            item2: "String"
        }
    },
    item7: "String",
    item8: {
        item1: "String",
        item2: {
            item1: "String",
            item2:  {
                item1: "String",
                item2: {
                    item1: "String",
                    item2: "String"
                }
            }
        }
    }
}

//refactoring need
function visual(obj) {
        var list = document.createElement("ul");

        for (var key in obj) {
            var elem = document.createElement("li");
            
            if (typeof obj[key] === "string"){
                elem.innerHTML = obj[key];
            } else {
                if (list.lastChild.tagName !== "LI"){
                    elem.appendChild(visual(obj[key]));
                } else {
                    list.lastChild.appendChild(visual(obj[key]));
                    continue;
                }
            }
            
            elem.addEventListener("click", function () {
                this.setAttribute("style", "background-color: rgba(255,0,0,0.1);");
            }, false);
            
            list.appendChild(elem);
        }
        
        return list;
}

var body = document.getElementsByTagName("body")[0];
body.appendChild(visual( obj));

body.addEventListener("click", function() {
    console.log("event");
    }, false);