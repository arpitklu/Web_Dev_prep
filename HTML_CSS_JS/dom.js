// 4 Pillars:

// - Selection of an Element
// - Changing HTML
// - Changing CSS
// - Event Listener

console.log('DOM.JS')
//##############################
// Selection of an Element

// var a = document.querySelector('h1')
// a.innerHTML = "Helloww bhai!!"
// console.log(a)

//##############################

// Changing HTML

// var a = document.querySelector('h1')
// a.innerHTML = "Helloww bhai!!"
// console.log(a)

//##############################

// Changing CSS
// var a = document.querySelector('h1')
// a.style.color = "black"
// a.style.backgroundColor = 'yellow'

//##############################

// Event Listener
// anything that is being done is an event.
// event listener is something which can see and understand the events.

var a = document.querySelector('h1')
a.addEventListener("click",function(){
    a.innerHTML = "Hellow Bhai!!"
    console.log('You just clicked and changed the text')
})

a.addEventListener("dblclick", function(){
    a.innerHTML = "Hellow Bhai!!"
    console.log('You just hovered your mouse poiter and changed the text')
})

a.addEventListener("mouseenter", function(){
    a.innerHTML = "Hellow Bhai!!"
    console.log('You just hovered your mouse poiter and changed the text')
})
    

//##############################