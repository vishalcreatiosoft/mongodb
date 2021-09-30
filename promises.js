const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([4,5,6,7])
        reject('rejected..')
    }, 2000);
})


doWorkPromise.then((result)=> {
    console.log('Success!',result)
}).catch((error) =>{
    console.log('Error',error)
})


let ello;