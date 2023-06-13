const mongoose = require('mongoose');

const Schema = mongoose.Schema

// Schema defines the structure of a document or type of document

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema)