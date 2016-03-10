// var attachTitle = function(firstargument) {
//     return "DR. " + firstargument;
// }

function attachTitle(firstargument) {
    return "DR. " + firstargument;
}

// var promise = new Promise(function(fulfilled, rejected) {
//     fulfilled("MANHATTAN");
// }).then(function(name) {
//     return attachTitle(name);
// }).then(function(fullName) {
//     console.log(fullName); 
// });

// promise.then(function(name) {
//     var fullName = attachTitle(name);
//     console.log(fullName);
// });

// promise.then(function(name) {
//     return attachTitle(name);
// }).then(function(fullName) {
//     console.log(fullName); 
// });

// var promise = new Promise(function(fulfilled, rejected) {
//     fulfilled("MANHATTAN");
// }).then(attachTitle).then(console.log);

Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);