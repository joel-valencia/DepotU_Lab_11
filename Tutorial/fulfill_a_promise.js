var promise = new Promise(function(fulfill, reject) {
    
    setTimeout(function() {
        fulfill('FULFILLED!');
    }, 300);
    

})

promise.then(function(response) {
    console.log(response);
});