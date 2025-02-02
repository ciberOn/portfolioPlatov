const itemList =[
    {name:"Red",color:"siniya",chancetowin: 0.8},
    {name:"Black",color:"siniya",chancetowin: 0.95},
    {name:"Red",color:"siniya",chancetowin: 0.74},
    {name:"Black",color:"siniya",chancetowin: 0.64},
    {name:"Red",color:"siniya",chancetowin: 0.90},
    {name:"0",color:"siniya",chancetowin: 0.7},
    {name:"All-in",color:"siniya",chancetowin: 0.9999995},
]
const btnPlay = document.getElementById("btn-play")
btnPlay.addEventListener("click",()=>{
    let ChanceToWin = Math.floor(Math.random()*7)    
    console.log(itemList[ChanceToWin])
alert(`You are win${itemList[chanceToTin].name} color of you prize ${itemList[chanceToWin].color} chance to win this item was ${itemList[chancetowin].chancetowin}`)
})