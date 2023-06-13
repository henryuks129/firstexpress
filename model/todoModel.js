// require mongoose
// From mongoose we use a method which is Schema(this defines the structure of the document we would store in a collective, its the thing that wraps around, note the S in schema is capitalized)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const traineeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // address: {
    //     type: String,
    //     required: true,
    // }
},{timestamps: true})

// let's create our model(model is what surrounds the schema and provides us with an interface by which to communicate with our DB)

const Trainees = mongoose.model('Trainees', traineeeSchema)

module.exports = Trainees