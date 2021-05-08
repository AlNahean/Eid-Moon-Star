// -- Made by --Nahean--
// http://fb.com/AlNahean19

var body = document.querySelector(".body")
var star = document.querySelectorAll(".star")
var button = document.querySelector(".button")
var svgContainer = document.querySelector(".eid-mk")
var trigger_div = document.querySelector(".svg-trigger")

window.addEventListener("scroll", ChangeOpacity)

function ChangeOpacity() {
  var total = window.screen.availHeight
  var math = (total/220000)* scrollY
  console.log(math);
  star.forEach((sta) =>{
    sta.style.opacity = ''+math+''
    //console.log(innerHeight)
    var bottomScrollHeight = scrollY + innerHeight
    var triggerTopHeight = trigger_div.offsetTop

    if (bottomScrollHeight > triggerTopHeight) {
      svgContainer.classList.add("add")
      console.log("working");
    }
   
  })
  
}

function addClass() {
  svgContainer.classList.add("add")
}


var mosjidImg = document.querySelector(".mosjid")
var link = {
  img: "mosjid-big.png"
}

if (screen.width > 800) {
  mosjidImg.src = `${link.img}`
}