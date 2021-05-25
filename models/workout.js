const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    excersises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Type is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name is required"
        },
        duration: {
            type: String,
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
            required: "Sets is required"
        },
        distance: {
            type: Number,
            trim: true
        },
      }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;