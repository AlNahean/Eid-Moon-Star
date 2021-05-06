// -- Made by --Nahean--
// http://fb.com/AlNahean19

var star = document.querySelectorAll(".star")

window.addEventListener("scroll", ChangeOpacity)

function ChangeOpacity() {
  var total = window.screen.availHeight
  var math = (total/206000)* scrollY
//math controls the opacity. but only work in this file cause total website viewHeight is 150
  star.forEach((sta) =>{
    sta.style.opacity = ''+math+''
  })
}

