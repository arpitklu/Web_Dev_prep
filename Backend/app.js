const express = require('express')
const morgan = require('morgan')
const app = express()
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'))
// we use the below mentioned 2 built-in middlewares to read the data that is received from frontend.
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// we use the below mentioned middleware to link the css file to the frontend
app.use(express.static("public"))

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

app.get('/register',(req,res)=>{
    res.render('register')
})

// CREATE OPERATION
app.post('/register', async (req, res)=>{
    const { username, email, password } = req.body
    const newUser = await userModel.create({
        username : username,
        email : email,
        password : password
    })
    res.send(newUser)
})

//READ OPERATION("find()")
app.get('/get-users' , (req, res)=>{
    userModel.find({
        username : "b"
    }).then((users)=>{
        res.send(users)
    })
})

//UPDATE OPERATION
app.get('/update-user', async (req,res)=>{
    await userModel.findOneAndUpdate({
        username : 'b'
    },{
        email : 'c@c.com'
    })
    res.send('user updated')
})

//DELETE OPERATION
app.get('/delete-user', async (req, res)=>{
    await userModel.findOneAndDelete({
        username : "b"
    })
    res.send('user deleted!')
})

app.post('/get-form-data', (req,res)=>{
    console.log(req.body)
    res.send('data received')
})

app.listen(3000,()=>{
    console.log("Server running at port 3000");
})
