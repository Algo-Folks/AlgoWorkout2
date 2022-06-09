const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for 'algo'
const algoSchema = new Schema({
    name: String,
    link: String,
    level: String,
    patterns: [String],
    dates: [Date],
    kanban: String,
    score: Number,
    time: Number,
    confidence: Number,
    notes: String
});

const algoModel = mongoose.model('questions', algoSchema );

module.exports = algoModel;