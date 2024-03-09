// <h1 id="one" class="two" name = "nm">hello</h1>

// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)

//id
let byId = document.querySelector('#one')
console.log(byId)

// class
let byClass = document.querySelector('.two')
console.log(byClass)

// attribute
let byAttribute = document.querySelector('h1[id="one"]')
console.log(byAttribute)

// console.log(byAttribute.textContent)
// byAttribute.textContent = "bye"


byAttribute.addEventListener('click',function(){
    byAttribute.textContent="bye"
    byAttribute.style.color ="blue"
    byAttribute.style.backgroundcolor = "yellow"
})






// let info = {
//     firstName:"satya",
//     lastName:"koka"
// }
// info['firstName']="koshika"
// console.log(info.firstName)

let info = {
    fullName:"satya koka",
    parent:{
        mother:"bhagyalakshmi koka",
        father:"venkataratnam koka"
    }
}
console.log(info.parent.father)
info.parent.father = "venkata k ratnam"