// using 'http'

// const http = require('http')


// const server = http.createServer((req,res) => {    //req = request & res = response
//     // console.log(req.url)
//     // res.end('Hellow world!!')

//     if(req.url=="/about"){
//         res.end("About page!!")
//     }

//     if( req.url == "/profile"){
//         res.end("Profile page!!")
//     }
//     if(req.url == "/"){
//         res.end("Home page!!")
//     }
// })

// server.listen(3000)


// using express

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hellow World!!')
})

app.get('/about',(req,res)=>{
    res.send("About Page!!")
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page!!")
})

app.listen(3000)