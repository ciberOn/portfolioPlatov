const itemList = [
    {name:"дед",color:"синий",cahanstowin: 60.04},
    {name:"м16",color:"черный",cahanstowin: 0.01},
    {name:"джугули",color:"белый",cahanstowin: 100.00},
    {name:"бан на доту",color:"красный",cahanstowin: 99.04},
    //{name:"пятй кп",color:"з",cahanstowin: 60,04},
   // {name:"дед",color:"синий",cahanstowin: 60,04},
   // {name:"дед",color:"синий",cahanstowin: 60,04},
   // {name:"дед",color:"синий",cahanstowin: 60,04},




]
const btnPplaaaa = document.getElementById("btn-play")
btnPplaaaa.addEventListener("click",() => {
    let cahansToWin = Math.floor(Math.random()*7)
alert(`your are win ${itemList[cahansToWin].name} color of your priZe ${itemList[cahansToWin].color} chns towin this iten iten was${itemList[cahansToWin].cahanstowin}`)
})