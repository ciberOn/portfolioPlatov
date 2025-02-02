const itemList = [
    {name:"ladaZoVestaSport",color:"red",chanstwowin: 0.8},
    {name:"vac ban",color:"red",chanstwowin: 0.9995},
    {name:"misturbist daet 1 dollor",color:"red",chanstwowin: 1.01},
]
const btnPlay = document.getElementById("btn-play")
btnPlay.addEventListener("click", () => {
    let chansTwoWin = Math.floor(Math.random()*3)
    console.log(itemList[chansTwoWin])
alert(`You are win${itemList[chansTwoWin].name} color of your prise ${itemList[chansTwoWin].color} chansTwoWin this item was ${itemList[chansTwoWin].chanstwowin}`)
})