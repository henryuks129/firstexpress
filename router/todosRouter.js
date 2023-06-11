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
router.get("/edits/:id", (req, res) => {
    res.render("newList", {
        title: "EJS createList page"
    }); 
});

router.put('/edits/:id',(req,res)=>{
    const id = req.params.id;
    const updatedData = req.body
    // Trainees.findOneAndReplace('6480890c1a979a96231b925d').then((result)=>{
    //     res.redirect('/todo/edits')
    // })
    Trainees.findById(id).then((result)=>{
        res.render('createList')
    })
    Trainees.findByIdAndUpdate(id, updatedData, {new: true}, (err, Trainees)=>{
        if (err){   
            console.log(err);
            return res.redirect('/edits')
        }
    })
    .then((result)=>{
        res.redirect('/edits/:id')
    })
    // Trainees.findByIdAndDelete(id).then((result)=>{ 
    //     res.redirect('/todos')
    // })
})



module.exports = router