const express = require('express');
const mongoose = require('mongoose')

const app = express()
const PORT = 8080

// config ejs
app.set('view engine', 'ejs')
require('dotenv').config()


// custom middleware
// app.get((req,res,next)=>{
    //     console.log('a request was just made');
    //     console.log(req.method);
    //     console.log(req.path);
    //     next()
    // })
app.use(express.static('public'))
mongoose.connect(process.env.DBURL)
.then(()=> console.log('DB connected successfully'))
.catch((err)=>console.log(err))
    
 // Routes
const trainees = [
    {name: 'Christy',profession: 'front-end dev'},
    {name: 'Ejiro',profession: 'back-end dev'},
    {name: 'Henry',profession: 'mobile app dev'},
    {name: 'John',profession: 'desktop dev'},
]


app.get('/',(req,res)=>{
    res.render('index',{title: 'EJS Home Page',trainees})
})

app.get('/about',(req,res)=>{
    res.render('about',{title: 'EJS About Page',trainees})
})

app.get('/todo/create',(req,res)=>{
    res.render('createList',{title: 'EJS createList page'})
})

app.use((req,res)=>{
    res.status(404).render('404',{title: 'EJS 404 Error Page'})
})

// redirecting routes
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.listen(PORT,()=>{
    console.log('logged successfully');
})
