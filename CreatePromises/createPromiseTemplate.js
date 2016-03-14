var APromise = {};

APromise.all = function(promises){
    console.log(promises);
    
};

APromise.race = function(promises){
    
};

APromise.resolve = function(value){
    var promise = new Promise(function(resolve, reject) {
        resolve(value);
    })
    
    return promise;
};

APromise.reject = function(err){
    
};

//module.exports.APromise = APromise;
