const itemList = [
    {name:"ladaVesta",color:"siniya",chanstowin:0.8},
    {name:"vac ban",color:"siniya",chanstowin:0.9995},
    {name:"nichego",color:"siniya",chanstowin:1.01},
    {name:"denichki",color:"siniya",chanstowin:0.2},
    {name:"shicers",color:"siniya",chanstowin:0.1},
    {name:"5poFizike",color:"siniya",chanstowin:0.04},
    {name:"-5kiberon",color:"siniya",chanstowin:0.99999999999999999995},
]
const btnPlay = document.getElementById("btn-play")
btnPlay.addEventListener("click", () => {
    let chansToWin = Math.floor(Math.random()*7)
alert(`You are win${itemList[chansToWin].name} color of your priZe ${itemList[chansToWin].color} chansToWin this item was ${itemList[chansToWin].chanstowin}`)
})