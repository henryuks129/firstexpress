const Trainees = require('../model/todoModel')

const todos_All = async (req,res)=>{
    try {
        const allTrainees = await Trainees.find();
        res.render("index", {
            title: "EJS Home Page",
            trainees: allTrainees
        });
    } catch (err) {
        console.log(err);
    }
}

const todos_Create =  (req,res)=>{
    console.log(req.body);
    const savedTrainee = new Trainees(req.body);
    savedTrainee
        .save()
        .then((result) => {
            res.redirect("/todos");
        })
        .catch((err) => {
            console.log(err);
        });
}

// Getting items
const todos_Params = (req,res)=>{
    const id = req.params.id;
    console.log(req.params.id);
    Trainees.findById(id).then((result)=>{
        res.render('details', {trainees: result, title: 'EJS Details'})
    })
}

// Deleting items
const todos_Delete =(req,res)=>{
    const id = req.params.id;
    console.log(req.params.id);
    Trainees.findByIdAndDelete(id).then((result)=>{
        res.redirect('/todos')
    }) 
}

// Updating items 
// const todos_Update = (req,res)=>{

// }

module.exports = {
    todos_All,
    todos_Create,
    todos_Params,
    todos_Delete,
    // todos_Update,
}