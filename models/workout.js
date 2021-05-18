const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Workout = new Schema({
    day: {
      type: Date,
    },
    excersises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Type is reqiured"
        },
        name: {
            type: String,
            trim: true,
            required: "Name is reqiured"
        },
        duration: {
            type: String,
            trim: true,
            required: "Duration is reqiured"
        },
        weight: {
            type: Number,
            trim: true,
            required: "Weight is reqiured"
        },
        reps: {
            type: Number,
            trim: true,
            required: "Reps is reqiured"
        },
        sets: {
            type: Number,
            trim: true,
            required: "Sets is reqiured"
        },
      }
    ]
});

const Workout = mongoose.model("Workout", Workout);

module.exports = Workout;