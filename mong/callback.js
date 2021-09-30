const doworkCallback = (callback) => {
    setTimeout(() => {
        //callback('this is my error..', undefined)
        callback( undefined, [1,4,5])
    }, 2000);
}

doworkCallback((error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
})