
const onMyBirthday = (isKayloSick) => { //Kaylo promises that in my birthday she make a cake

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!isKayloSick){ //If Kaylo didnt get sick, we will have a certain number of cake
                resolve(2);
            }
            else{
                reject(new Error("i am sad"))
            }
        }, 2000);
    })
}