let headOne = document.querySelector('h1')
console.log(headOne)

let buttonElement = document.querySelector('button')
console.log(buttonElement)

buttonElement.addEventListener('click',function(){
    headOne.style.color = "purple"
})