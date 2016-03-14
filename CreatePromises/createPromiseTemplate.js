var APromise = {};

APromise.all = function(promises){
    //console.log(promises);
    
};

APromise.race = function(promises){
    //console.log(promises);
};

APromise.resolve = function(value){
    console.log(value);
    
    var promise = new Promise(function(resolve, reject) {
        resolve(value);
    })
    
    //promise.resolve(value);
    //console.log(promise);
    return promise;
};

APromise.reject = function(err){
    //console.log(err);
    var promise = new Promise(function(resolve, reject) {
        reject(err);
    })
    
    //promise.reject(err);
    return promise;
};

//module.exports.APromise = APromise;
