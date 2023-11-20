// fetch("Books.json").then((Response)=>{
//     return Response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Could not fetch");
// })

const getData = async ()=>{
   const response = await fetch("Books.json")
   const data = await response.json()
   return data

}
getData().then((data)=>{
    console.log(data);
})