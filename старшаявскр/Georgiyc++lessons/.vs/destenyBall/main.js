const Array = ["yes","no","52","maybe","-5","bulbul"]

const btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    btn.innerText= Array[3]
})