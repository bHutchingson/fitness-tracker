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

// create a workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

module.exports = router;