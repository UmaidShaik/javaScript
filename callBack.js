const myFunction=((callback)=>{
    console.log("Hello world")
    callback(num)
    num=10
});

// myFunction(callback(Value))
//     console.log(Value);


// let student = ["sachin","Umaid","sahil"]



// const ul = document.querySelector("ul")
// console.log(ul);
// let html =``;
// players.forEach((student)=>{
//     html+=`<li>${student}</li>`;

// });
// ul.innerHTML = html;
// console.log(html);

// const student1 = { 
//     name: "Umaid", 
//     id: 45, 
//     hobbies: ["Reading", "Cricket", "Soccer"],
//     login: function(){
//         console.log(this["hobbies"]);
//     },
//     logout: function(){
//         console.log("logout");

//     }
//   }; 
   
//   console.log(student1);
//   student.login();

const people = [ 
    { name: "Umaid", age: 28, occupation: "Engineer" }, 
    { name: "Sahil", age: 32, occupation: "Designer" }, 
    { name: "Dipika", age: 45, occupation: "Teacher" } 
]; 

 
const tableBody = document.getElementById("tableBody"); 

 
for (const person of people) { 
    const row = document.createElement("tr"); 
    row.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.occupation}</td>`; 
    tableBody.appendChild(row); 
}


  
  