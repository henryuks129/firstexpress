const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require('./router/todosRouter');

const app = express();

// config ejs
app.set("view engine", "ejs");
require("dotenv").config();

// ENVIRONMENTAL VARIABLE
const db_url = process.env.DBURL;
const port = process.env.PORT || 8080;

// custom middleware
// app.get((req,res,next)=>{
//     console.log('a request was just made');
//     console.log(req.method);
//     console.log(req.path);
//     next()
// })

// custom middleware
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));

// mongoDB connection
const connect = () => {
    mongoose.connect(db_url);
    try {
        console.log("DB connected successfully");
    } catch (err) {
        console.log(err);
    }
};
// mongoose.connect(process.env.DBURL)
// .then(()=> console.log('DB connected successfully'))
// .catch((err)=>console.log(err))

// TESTING OUR MODEL AND DB
// app.get('/add-trainee', async (req,res)=>{
//     const TRAINEES = new Trainees({
//         name: 'michael',
//         profession: 'senior dev',
//         description: 'he\'s quite good at it',
//     })
// TRAINEES.save()
// .then((result)=>{
//     res.send(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
// For saving all the info in the DB
//     try{
//         const savedTrainees = await TRAINEES.save()
//         res.send(savedTrainees)
//     } catch(err){
//         console.log(err);
//     }
// })

// For getting all info from the DB
// app.get('/all-trainees', async (req,res)=>{
//     try{
//         const allTrainees = await Trainees.find()
//         res.send(allTrainees)
//     } catch(err){
//         console.log(err);
//     }
// Trainees.find()
// .then((results)=>{
//     res.send(results)
// })
// .catch((err)=>{
//     console.log(err);
// })
// })

// To get a single trainee
// app.get('/single-trainee', async (req,res)=>{
//     try{
//         const singleTrainee = await Trainees.findById('647efeda41dc51972d3cc7a7')
//         res.send(singleTrainee)
//     } catch(err){
//         console.log(err);
//     }
// Trainees.findById('')
// .then((result)=>{
//     res.send(result)
// })
// .catch((err)=>{
//     console.log(err);
// })
// })

// Routes
// const trainees = [
//     {name: 'Christy',profession: 'front-end dev'},
//     {name: 'Ejiro',profession: 'back-end dev'},
//     {name: 'Henry',profession: 'mobile app dev'},
//     {name: 'John',profession: 'desktop dev'},
// ]

app.get("/", (req, res) => {
    res.redirect("/todos");
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "EJS About Page"
    });
});

// middleware
app.use('/todos', todoRouter)

app.use((req, res) => {
    const statusCode = undefined;
    res.status(statusCode || 400).render("404", {
        title: "EJS 404 Error Page"
    });
});

// redirecting routes
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

app.listen(port, () => {
    connect();
    console.log(`logged successfully ${port}`);
});