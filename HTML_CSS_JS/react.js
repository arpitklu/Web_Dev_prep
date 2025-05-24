// ###########################################################################################


// react js  is a library which is used to make UI
// react DOM is used to connect/add the react library to your DOM(ex: your Browser)

// WebApps: React + React DOM
// MobileApps: React + React Native

// ###########################################################################################


// var root=document.querySelector("#root")
// var h1=document.createElement('h1')
// h1.innerHTML = "heyy"
// root.appendChild(h1)


//create an element using React.createElement.
var h1 = React.createElement('h1',null,"Hello from React")
//select the area/div uunder which you need changes
var parent=document.querySelector("#parent")
// initialized parent to root
var root=ReactDOM.createRoot(parent)
// rendered the desired changes to the desired location
root.render(h1)