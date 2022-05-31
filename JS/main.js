//! Document Objet Model
//? селекторы
// let btn = document.getElementById('btn')
// // console.log(btn);


// let blocks = document.getElementsByClassName('blocks')
// console.log(blocks);

// let blocks = document.getElementsByTagName('div')
// console.log(blocks);

// let inp = document.getElementsByName('phone')
// console.log(inp);

//? querySelectors

// let btn = document.querySelector('#btn')
// let blocks = document.querySelectorAll('.blocks')
// let blocks2 = document.querySelectorAll('div')
// let inp = document.querySelectorAll('[name="phone"]')
// console.log(btn,blocks,blocks2,inp);

// let container = document.getElementById('container')
// for(let i=1; i<=10; i++) {

//     let block = document.createElement('div')
//     block.style.width = '100px'
//     block.style.height = '100px'
//     block.style.backgroundColor = 'green'
//     block.style.margin = '10px'
//     container.append(block)

//     console.log(container.firstChild);
//     console.log(container.firstChild.nextElementSibling);
// }

// container.style.display = 'flex'
// console.log(container);
// container.innerText="Hello DOM"
// container.innerHTML="<h1>Hello DOM</h1>"
// container.style.color = 'white'
// container.style.backgroundColor = 'red'

// let blocks1 = document.querySelectorAll('.blocks')
//!NodeList(5) - static - один раз обращается к элементам
// let blocks2 = document.getElementsByClassName('blocks')
//! HTMLCollection(4) - dynamic - постоянно следит за изменениями
// blocks1[0].remove()

// console.log(blocks1);
// console.log(blocks2);

// let inp = document.getElementById('inp')
// console.log(inp);
// inp.setAttribute('placholder', 'search...')
// inp.classList.add('new-class')