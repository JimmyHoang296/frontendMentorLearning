var btns = document.querySelectorAll('button')
var questions = document.querySelectorAll('.question p')

questions.forEach(ques => {
    ques.addEventListener('click', handleClick)
})
btns.forEach(btn =>{
    btn.addEventListener('click', handleClick)
})

function handleClick(e){
    var parentNode = e.target.closest(".faq")
    parentNode.classList.toggle("active")
}