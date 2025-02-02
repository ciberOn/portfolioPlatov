const itemList = [
    {name:"LadaVesta",color:"siniya",chancetowin: 0.8},
    {name:"vac ban",color:"siniya",chancetowin: 0.9995},
    {name:"LadaVesta",color:"black",chancetowin: 0.1},
    {name:"gold",color:"24karat",chancetowin: 0.01},
    {name:"sigma",color:"obichnaya",chancetowin: 0.3},
    {name:"5pogeometry",color:"siniya",chancetowin: 0.012334},
    {name:"mashina",color:"gonochnaya",chancetowin: 0.6},

]
const btnPlay = document.getElementById("btn-play")
btnPlay.addEventListener("click", ()=>{
    let ChanceToWin = Math.floor(Math.random()*7)
alert(`You're win${itemList[ChanceToWin].name} color of your prize ${itemList[ChanceToWin].color} chanceToWin this item was ${itemList[ChanceToWin].color}`)  

})