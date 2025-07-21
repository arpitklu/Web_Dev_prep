const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
// we use the below mentioned 2 built-in middlewares to read the data that is received from frontend.
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")        //view engine!!

app.get('/',(req,res)=>{
    res.render('index')              //when we use express with "view engine" we use "res.render"
})

app.get('/about',(req,res)=>{
    res.send("About Page!!")
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page!!")
})

// app.get('/get-form-data', (req,res)=>{
//     console.log(req.query)
//     res.send('data received')
// })
// get method is used to send data from server(backend) to frontend.
//post method is used to bring data from frontend to backend(server).
app.post('/get-form-data', (req,res)=>{
    console.log(req.body)
    res.send('data received')
})

app.listen(3000,()=>{
    console.log("Server running at port 3000");
})
