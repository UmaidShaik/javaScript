// const c=5
// let d=null
// let e = 7
// console.log(d, typeof d)
// console.log(e, typeof e)
// var a
// a= 'umaid'
// console.log(a)
// let b='shaikh'
// console.log(b)
// { 
//     const c=4
// console.log(c)
//     var a='abc'   //var updated the value under the scope
//     console.log(a)
//     let b='xys'
//     console.log(b)
// }
// console.log(a)
// console.log(b)

// console.log(a, typeof a)
// console.log(b, typeof b)

const z=[1,2,3,4,5]
const y=[2,2,3,4,5]
// console.log(z==y); 
// console.log(z==y);
// console.log(z[0]);
// console.log(y[0]);
z=y
console.log(z==y);

// z[0]=100
// console.log(y[0]);

let  addition=(number1,number2) => {
    if(typeof number1=='number' && typeof number2=='number')
    {
        return['success',number1+number2]
    }
    else{
        return ['error', 0]
    }
}
// let a=addition(10,20)
// console.log(a[0],a[1]);

let sub=(num1,num2) => {
    if(typeof num1=='number' && typeof num2 == 'number')
    {
        return['success',num1-num2]
    }
    else{
        return['error',0]
    }
}
// let b=sub(30,10)
// console.log(b[0],b[1]);

    let hello = () =>{
        console.log('hello');
    }
    const random = (param,number1,number2) =>{
       return param(number1,number2)
    }
//    let a= random(addition,10,20)
//     console.log(a[1])
    
    let functionGenerator = (additionOrSubtraction) =>{
        switch(additionOrSubtraction){
            case "addition":
                return ['success',addition]
            case "Subtraction":
                return['success',sub]
            default: return['','Invalid']
        }
    }

   let[m,add]=functionGenerator('addition')
   let a=add(2,3)
   let[n,Subtraction]=functionGenerator('sub')
   let b=sub(4,2)
   console.log(a[1]);
   console.log(b[1]);


