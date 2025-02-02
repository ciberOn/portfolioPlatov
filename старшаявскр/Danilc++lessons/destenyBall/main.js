const array = ["Yes","No","52","+50","+100","bulbul"]

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
   btn.innerText = array[5]
})