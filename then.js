//In this file we practise method then()

const myPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('The promise worked succesfully')
    },1000)
})

console.log('After Promise, Promise is not done yet')

myPromise.then(
    result => {
        console.log('result :', result)
    },
    error => {
        alert(error);
    }
)