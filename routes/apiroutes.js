const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require("path");

//get the last workout
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(workoutDB => {
        res.status(200).json(workoutDB);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;