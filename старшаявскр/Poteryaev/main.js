const itemList = [
    {name:"Pochka Fedora",color:"black",chanstowin: 0.3},
    {name:"2 otchima",color:"black",chanstowin: 0.7},
    {name:"KiberOne",color:"black",chanstowin: 0.1},
    {name:"Andrey Romanovich",color:"black",chanstowin: 0.6},
    {name:"Roman Andreevich",color:"black",chanstowin: 0.6},
    {name:"dota 3",color:"black",chanstowin: 0.1},
    {name:"Nigger",color:"white",chanstowin: 0.8},
]
const btnPplay = document.getElementById("btn-play")
btnPplay.addEventListener("click",()=>{
    let chansToWin = Math.floor(Math.random()*7)
alert(`Your are win ${itemList[chansToWin].name} color of your priZe ${itemsList[chansToWin].color} chansToWin this item was ${itemsList[chansToWin].chansToWin}`
})