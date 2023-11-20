const ulRef = document.querySelectorAll('li')
let inref = document.querySelector('input')
const btnRef = document.querySelector('button')
let q1 ="Blue"
let html ='' 

        btnRef.addEventListener(`click`, (e) => { 
            if (inref.value == q1) {
            console.log(html= "You are Right " );
           
            }
            else  
            console.log(html = "Wrong"); 
            ulRef.innerHTML=html;     
        }) 
    

