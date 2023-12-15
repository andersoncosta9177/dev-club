// console.log("modulo avançado de javascript")

// const element = document.getElementById("main-text")

// console.log(element)

// const element = document.getElementsByClassName("paragraph")
// console.log(element)
// const element = document.getElementsByTagName('p')
// console.log(element)

// const element = document.querySelector('p')
// console.log(element)

// const element = document.querySelectorAll('p')
// console.log(element)

// a diferença entre bytagname e queryselectall 

// const element = document.querySelectorAll("p")

// const array = element.forEach(element =>{
//     console.log(element)
// })

// const element = document.querySelector("input")
// console.log(element.value)

// const element  = document.querySelector('h1')
// element.innerHTML = 'HELLO WORLD <p>ola mundo</p>'


// const element  = document.querySelector('h1')
// element.style.color = 'red'
// element.style.fontSize = '34px'
// element.style.backgroundColor = 'purple'

// const element  = document.querySelector('button')
// // function mudaNome(){
// //     alert("ola")
// // }
// element.onclick =  ()=>{
//     alert("ok")
// }


// const element  = document.querySelector('input')
// // function mudaNome(){
// //     alert("ola")
// // }
// element.onkeypress =  ()=>{
//     console.log("ok")
// }

// const input = document.queryselector("input")

// input.onkeypress = (event) => {
//     console.log(event.key)
// }


const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button")


input.addEventListener('focus', ()=>{
    console.log("focou no input")
})

select.addEventListener('change', ()=>{
    console.log("mudou o select")
})

button.addEventListener('click', ()=>{
    console.log("clicou no botao")
})