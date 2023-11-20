const Ott =[
    { 
        name : "Hotstar",
        price : 1000,
        status : true
    },
    {
        name : "Netflix",
        price : 2000,
        status : false
    },
    {
        name : "AmazonPrime",
        price : 1500,
        status : true
    },
    {
        name : "Zee5",
        price : 700,
        status : false
    }
]

const sub = Ott.filter((ott=>{
    return ott.status
}))

console.log(sub);

const pricelist = [6723,9732,9207,3822,7897]

const price = pricelist.map((price)=>{
    price - price*0.2;
})
console.log(price);

const productlist = [
    {
        pid:1,
        pname:"bottle",
        pprice:400

    },
    {
        pid:12,
        pname:"bucket",
        pprice:4000

    },
    {
        pid:3,
        pname:"bag",
        pprice:5100

    },
    {
        pid:4,
        pname:"Cupboard",
        pprice:8000

    }
]

const newList = productlist 
  .filter(product => product.pprice >= 5000) 
  .map(product => { 
    return { 
      id: product.id, 
      name: product.pname, 
      price: product.pprice - product.pprice * 0.3, 
    }; 
  }); 
 
console.log(newList); 
console.log(productlist); 
 
 
//sum 
 
const result = productlist.reduce((sum,product)=>{ 
    return product.pprice+sum; 
},0); 
 
console.log(result);

const markslist = [70,80,97,47,98]
const marks = markslist.find((marks)=>{
    return marks>80;
})
console.log(marks);

markslist.sort((v1,v2) =>{
return v1-v2;
})
console.log(markslist);

productlist.sort((p1,p2)=>{
    return p1.pname.localeCompare(p2)
})
console.log(productlist);