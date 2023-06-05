const express = require('express');

const app = express()
const PORT = 8080

// config ejs
app.set('view engine', 'ejs')

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
