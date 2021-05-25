const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Type is required"
    },
    name:{
        type: String,
        trim: true,
        required: "Name is required"
    },
    duration: {
        type: Number,
        trim: true,
        required: "Duration is required"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Weight is required"
    },
    reps: {
        type: Number,
        trim: true,
        required: "Reps is required"
    },
    sets: {
        type: Number,
        trim: true,
        required: "Number is required"
    },
    distance: {
        type: Number
    },
});

const Exercises = mongoose.model("Exercise", exercisesSchema);

module.exports = Exercises;