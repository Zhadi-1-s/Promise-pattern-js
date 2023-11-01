function capitilize(test){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(test.toUpperCase())
        },1000)
    })
}

// capitilize('hello').then(
//     result => {
//         console.log(result)
//     },
//     error => {
//         console.log(error)
//     }
// )
async function main(){
    console.log('function main started');

    const result = await capitilize('hello');
    console.log(result)

    console.log('await is done and move to next line')

    return 'end of function main'
}

console.log(main())