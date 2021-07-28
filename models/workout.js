const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: date,
    default: () => new Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      duratino: {
        type: Number,
        required: true
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;