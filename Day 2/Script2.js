const inref = document.querySelector("input")
const pref = document.querySelector('p')

inref.addEventListener('keyup',(e)=>{
    pref.innerText= inref.value;
}
)