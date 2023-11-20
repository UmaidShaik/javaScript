const todos=(url)=>{
    return new Promise((resolve,reject)=>{


    const request = new XMLHttpRequest();
request.addEventListener('readystatechange',(e)=>{
    // console.log(request,request.readyState);
    if(request.readyState==4 && request.status==200){
        resolve(JSON.parse(request.responseText))
    }
    else if(request.readyState==4){
        reject('Couldnt found data');
    }
    request.open('Get',url)
request.send();
})
    })
}


const url ="Books.json"
url1="https://jsonplaceholder.typicode.com/todos"
todos(url).then((data)=>{
    console.log(data);
    return todos(url).then((data)=>{
        console.log(data);
        return todos(url).then((data)=>{
            console.log(data);
            
        })
    })
}).catch((err)=>{
console.log("reject");
console.log(err);
})