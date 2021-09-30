const addition = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('Some Error');
            resolve(a + b);
        }, 3000);
    });
};

//previosly used 

// addition(2, 5).then((sum) => {
//     console.log(sum);

//     addition(50, sum).then((result) => {
//         console.log(result);
//     }).catch((message) => {
//         console.log(message);
//     });
// }).catch((msg) => {
//     console.log(msg);
// });

//now updated as 

addition(1, 5).then((sum) => {
    console.log(sum);
    return addition(sum, 4);
}).then((sum2) => {
    console.log(sum2);
}).catch((message) => {
    console.log(message);
});