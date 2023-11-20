const getData=()=>{
    return new Promise((resolve,reject)=>{
        resolve("promise resolved")
        reject("reject")
    })
}
getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})