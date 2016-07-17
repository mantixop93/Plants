function hello(date) {
    console.log(date.toString);
    
}

function self(paramFun, period){
    setTimeout(paramFun, period);
    setTimeout(function() {
        self(paramFun, period);
        }, period);
};

self(hello, 1000);