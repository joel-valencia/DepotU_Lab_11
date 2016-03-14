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
    
};
function mapAsyncInDescendingOrder(iterator, array, context) {
    
};