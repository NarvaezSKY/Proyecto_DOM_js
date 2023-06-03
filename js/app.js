

// console.log(document.querySelector('h1'))
// document.getElementById('clase').textContent="ola"


// let titulo=document.querySelector('.titulo')

// titulo.textContent='para pensar :v'
// titulo.innerHTML='para pensar.html' 


let lista=document.querySelector('.lista')
console.log(lista)

// let li = document.createElement('li')
// li.innerHTML='OSTIA PUTA TIO QUE HE CREAO UN ELEMENTO DE UNA LISTA EN JAVASCRIPT OOO MA GA'

// lista.appendChild(li)




// let variable=document.createElement('li')
// variable.innerHTML=prompt("ingresa el valor de la lista")

// lista.appendChild(variable)



const array=[prompt("ingresa el primer valor"),prompt("ingresa el segundo valor"),prompt("ingresa el tercer valor")]
// array.forEach(item =>{
//     console.log(item)
//     const li=document.createElement('li')
//     li.innerHTML=item
//     lista.appendChild(li)
// })



array.forEach(item=>{
    lista.innerHTML+=`<li>${item}</li>`
})


