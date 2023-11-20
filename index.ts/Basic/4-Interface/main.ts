import { shape } from "./shape";
import { rectangle } from "./rectangle";

let rect = new rectangle(30,40);
let shape1 : shape[]=[];

shape1.push(rect);
console.log(shape1);
shape1.forEach(Shap=>{
console.log(Shap.calculateArea());
})

