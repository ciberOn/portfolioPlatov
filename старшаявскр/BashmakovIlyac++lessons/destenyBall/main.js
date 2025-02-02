const array = ["Yes","No","52","Maybe","-5","bulbul"]

const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    btn.innerText= array[5]
})