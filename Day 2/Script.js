const btnRef = document.querySelector("button"); 
const inputRef = document.querySelector("input"); 
const ulRef = document.querySelector("ul"); 
 
btnRef.addEventListener('click', (e) => { 
    const name = inputRef.value; 
    console.log(name); 
    if (name.length != 0) { 
        const li = document.createElement("li"); 
        li.innerText = name; 
        ulRef.appendChild(li); 
        inputRef.value = ""; 
    } 
}); 
 
ulRef.addEventListener('click', (e) => { 
    if (e.target.tagName !== 'UL') { 
        console.log(e.target.remove()); 
    } 
});
