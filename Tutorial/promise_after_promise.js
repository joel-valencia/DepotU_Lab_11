first().then(function(firstVal) {
    return second(firstVal);
}).then(function(secondVal) {
    console.log(secondVal);
})