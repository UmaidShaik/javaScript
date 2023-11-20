"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var rect = new rectangle_1.rectangle(30, 40);
var shape1 = [];
shape1.push(rect);
console.log(shape1);
shape1.forEach(function (Shap) {
    console.log(Shap.calculateArea());
});
