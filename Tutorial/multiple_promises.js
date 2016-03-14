function all(promise1, promise2) {
    var counter = 0;
    var result = [];
    
    var promise = new Promise(function(fulfill, reject) {
        
        
        
        promise1.then(function(arg) {
            result[0] = arg;;
            counter++;
            if (counter == 2) {
                //console.log(result);
                fulfill (result);
            }
        });
        promise2.then(function(arg) {
            result[1] = arg;;
            counter++;
            if (counter == 2) {
                //console.log(result);
                fulfill (result);
            }
        });
    });
    
    return promise.then(function() {
        //console.log(result);
        return result;
    })
}
// getPromise1().then(function(arg) {
//     console.log("1", arg);
// });
// getPromise2().then(function(arg) {
//     console.log("2", arg);
// });


all(getPromise1(), getPromise2()).then(console.log);