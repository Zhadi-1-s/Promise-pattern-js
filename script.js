// First example
const onMyBirthday = (isKayloSick) => { //Kaylo promises that in my birthday she make a cake

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!isKayloSick){
                console.log('there are 2 cakes') //If Kaylo didnt get sick, we will have a certain number of cake
                resolve(2);
            }
            else{
                reject(new Error("i am sad"))
            }
        }, 2000);
    })
}

//With resolve
function sumAsync(x,y){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('will done after 1s');
            resolve(x+y);
        },1000);
    })
}

console.log(sumAsync(10,5))

