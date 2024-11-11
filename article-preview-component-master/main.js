var shareBtn = document.getElementById("shareBtn")
var footerEle = document.querySelector(".footer")

shareBtn.addEventListener("click",()=>{
    footerEle.classList.toggle('share')
})