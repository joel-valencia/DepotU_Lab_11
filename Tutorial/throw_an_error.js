// console.log(process.argv[2]);
// console.log(JSON.parse(process.argv[2]));


// var parsePromised = new Promise(function(data) {
//     try {
//         var result = JSON.parse(data);
//     } catch (e) {
//         console.log(e);
//     }
//     parsePromised.resolve(result);
// });

function parsePromised(data) {
    var promise =  new Promise(function(fulfill, reject) {
        try {
            var obj = JSON.parse(data);
            fulfill(obj);
        } catch (e) {
            reject(e);
        }
    });
    
    return promise;
}
// var parsePromised = new Promise(function(data) {
//     try {
//         var result = JSON.parse(data);
//     } catch (e) {
//         console.log(e);
//     }
//     parsePromised.resolve(result);
// });


parsePromised(process.argv[2]).then(null, console.log);

// JSON.parse(process.argv[2]).then(null, console.log);