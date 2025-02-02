const itemList = [
    {name:"ladaVesta",color:"siniya",chanstowin:0.8}, 
    {name:"vac ban",color:"siniya",chanstowin:0.9995}, 
    {name:"nichego",color:"siniya",chanstowin:1.01}, 
    {name:"denishki",color:"siniya",chanstowin:0.2}, 
    {name:"snicers",color:"siniya",chanstowin:0.1}, 
    {name:"5poFizike",color:"siniya",chanstowin:0.04}, 
    {name:"-5kiberon",color:"siniya",chanstowin:0.999999999999995}, 
]
const btnPplay = document.getElementById("btn-play")
btnPplay.addEventListener("click",()=>{
    let chansToWin = Math.floor(Math.random()*7)
alert(`You are win${itemlist[chansToWin].name} color of you priZe ${itemList[chansToWin].color} chansToWin this was ${itemList[chansToWin].chanstowin}`)
})