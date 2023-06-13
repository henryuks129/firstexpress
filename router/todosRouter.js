const express = require('express')
const router = express.Router()
const Trainees = require("../model/todoModel");
const todoControllers = require('../controllers/todoControllers')


// todo routes

router.get("/create", (req, res) => {
    res.render("createList", {
        title: "EJS createList page"
    });
});
router.get("/", todoControllers.todos_All);

//
router.post("/", todoControllers.todos_Create);


// Getting specific item using params
router.get('/specific/:id', todoControllers.todos_Params)

// delete route
router.get('/delete/:id', todoControllers.todos_Delete)

// editing 
router.post('/edits/:id',(req,res)=>{
    const id = req.params.id;
    const updatedData = req.body
    // Trainees.findOneAndReplace('6480890c1a979a96231b925d').then((result)=>{
    //     res.redirect('/todo/edits')
    // })
    // Trainees.findById(id).then((result)=>{
    //     res.render('createList')
    // })
    Trainees.findByIdAndUpdate(id, updatedData, {new: true})
    .then((result)=>{
        res.redirect('/todos')
    })
    // Trainees.findByIdAndDelete(id).then((result)=>{ 
    //     res.redirect('/todos')
    // })
})

router.get("/edits/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    Trainees.findById(id).then((result) => {
        res.render("newList", { trainees: result,
            title: "EJS newList page"
        }); 
    });
    // res.render("newList", {
    //     title: "EJS createList page"
    // }); 
});



module.exports = router