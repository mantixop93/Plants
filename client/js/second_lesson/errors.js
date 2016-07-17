function MyError(params) {
    Error.call(this, params);
    this.params = params;
    
    this.name = "myError";
    this.stack = (new Error()).stack;
}

MyError.prototype = Object.create(Error.prototype);

try {
    throw new MyError("Hello");
} catch (err) {
    if (err instanceof MyError) {
        console.log("Here!");
        throw err;
    } else {
        throw err;
    }
}
