let Addition=(...numbers)=>{
    let numbersSum=0;
    for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i]=='number'){
            numbersSum+=numbers[i];
        }
        else{
            return "Invalid Input";
        }
    }
    return numbersSum;
}
let add=functionGenerator("addition");
let x=add(1,2,3,4);
console.log(x);


let Subtraction=(...numbers)=>{
    let numbersSubtraction=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(typeof numbers[i]=='number'){
            numbersSubtraction-=numbers[i];
        }
        else{
            return "Invalid Input";
        }
    }
    return numbersSubtraction;
}

let subtract=functionGenerator("subtraction");
let y=subtract(1,2,3,4);
console.log(y);


let Multiplication=(...numbers)=>{
    let numbersMultiplication=1;
    for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i]=='number'){
            numbersMultiplication*=numbers[i];
        }
        else{
            return "Invalid Input";
        }
    }
    return numbersMultiplication;
}

let multiplication=functionGenerator("multiplication");
let z=multiplication(1,2,3,4);
console.log(z);



let Division=(...numbers)=>{
    let numbersDivision=1;
    for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i]=='number'){
            numbersDivision/=numbers[i];
        }
        else{
            return "Invalid Input";
        }
    }
    return numbersDivision;
}

let division=functionGenerator("division");
let p=division(1,2,3,4);
console.log(p); 


let functionGenerator = (functionName)=>{
    switch(functionName){
        case "addition" : 
            return Addition;
        case "subtraction" : 
            return Subtraction;
        case "multiplication" : 
            return Multiplication;
        case "division" : 
            return Division;
        default : return defaultFunction;
    }
}

let defaultFunction=(...number)=>{
return "invalid"
}
let r
let q
let function ()=>{
return(r+q)

}




