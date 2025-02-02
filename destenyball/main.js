const list =["da", "no", "maybe", "-5kiberon", "babazina"]
const btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    let randomInt =Math.floor(Math.random()*list.length)
    btn.innerText=list[randomInt]
})