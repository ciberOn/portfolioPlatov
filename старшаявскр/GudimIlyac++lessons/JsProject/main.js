const itemList = [
    {name:"Lada Vesta Sport", color:"black", chansToWin: 0.3},
    {name:"vac ban", color:"black", chanstowin: 0.9},
    {name:"niger", color:"black", chanstowin: 0.3},
    {name:"Roman", color:"black", chanstowin: 0.3},
    {name:"sceit", color:"black", chanstowin: 0.3}
]
const btnPplay = document.getElementById("btn-play")
btnPplay.addEventListener("click", ()=>{
    let  chansToWin = Math.floor(Math.random() *5)
    alert(`you are win ${itemList [chansToWin].name} color off yor prize ${itemList[chansToWin].color} chance to win this item was ${itemList[chansToWin].chansToWin}`)
    
})