const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for 'algo'
const algoSchema = new Schema({
    questionID: String,
    name: String,
    link: String,
    level: String,
    pattern: String,
    description: String,
    companies: [String],
    resources: [String]
});

const algoModel = mongoose.model('questions', algoSchema );

module.exports = algoModel;