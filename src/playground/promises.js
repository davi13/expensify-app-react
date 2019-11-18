

const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('this is My resoved data');
    // }, 5000);
    reject('something go wrong')
});
console.log('before');
promise.then((data) => {
    console.log('1', data);
}).catch((e) => {
    console.log('Error: ', e)
})

console.log('after')