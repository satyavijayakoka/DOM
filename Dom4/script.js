let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')

console.log(headOne)
console.log(inputText)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
   let colorText = inputText.value
   headOne.style.color = colorText
   inputText.value = ""
})