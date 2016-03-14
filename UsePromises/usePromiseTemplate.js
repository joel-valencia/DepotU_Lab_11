function mapAsync(iterator, obj, context) {
    // console.log(iterator);
    // console.log(obj);
    // console.log(context);
    
    var promise = new Promise(function(resolve, reject) {
        var result = [];
            
        for (var i in obj) {
            //console.log(i);
            iterator(obj[i]).then(function(arg) {
                //console.log(i);
                result.push(arg);
                // console.log(result);
                if (result.length == obj.length) {
                    //console.log(result);
                    resolve(result);
                }
            })
        }
    })

    return promise;
    
};
function mapAsyncInOrder(iterator, array, context) {
    
    var promise = new Promise(function(resolve, reject) {
        var result = []
        
        function next(i) {
            //console.log(i);
            if (result.length < array.length) {
                iterator(array[i]).then(function(arg) {
                    result.push(arg);
                    i++;
                    next(i);
                })
            } else {
                //console.log(result);
                resolve(result);
            }
        }
        
        var i = 0;
        next(i);
    })
    
    return promise;
};
function mapAsyncInDescendingOrder(iterator, array, context) {
    
    var promise = new Promise(function(resolve, reject) {
        var result = []
        
        function next(i) {
            //console.log(i);
            if (result.length < array.length) {
                iterator(array[i]).then(function(arg) {
                    result.push(arg);
                    i--;
                    next(i);
                })
            } else {
                //console.log(result);
                resolve(result);
            }
        }
        
        var i = array.length - 1;
        next(i);
    })
    
    return promise;
};