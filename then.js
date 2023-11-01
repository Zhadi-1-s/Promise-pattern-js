console.log('hello world')

const myPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('You are in promise')
        console.log('You are in Promise')
    },1000)
})

console.log('After Promise')

myPromise.then(
    console.log('promise well done')
)