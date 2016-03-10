var promise = new Promise(function(fulfill, reject) {
    
    setTimeout(function() {
        var errorObj = new Error('REJECTED!');
        reject(errorObj);
    }, 300);
    

})


function onReject(error) {
    console.log(error.message);
}

promise.then(null, onReject);