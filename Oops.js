let myObj1={
    fname:'umaid',
    lname:'shaikh',
    xyz:function(a,b) {
        return (a+b)}
        (1,2),
    mno:function(a,b){
        return function(a,b){
            return a*b
        }(2,3)

    }(2,3),
    abc:function(a,b){
        return(x+y)
    }
}

let myObj2={
    fname:'umaid',
    lname:'shaikh',
}
// console.log(myObj.xyz);
// console.log(myObj.mno);
// console.log(myObj.abc);

let temp=myObj1
let temp2=myObj2
myObj1=temp2
myObj2=temp
console.log(myObj1);
console.log(myObj2);

