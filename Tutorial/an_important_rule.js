function alwaysThrows() {
    // console.log(new Error("OH NOES"));
    throw new Error("OH NOES");
}

function iterate(arg) {
    console.log(arg);
    return arg + 1;
}

//console.log(Q.fcall());

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);

//console.log("test");

// Q.fcall(function() {
//     return "test";
// })