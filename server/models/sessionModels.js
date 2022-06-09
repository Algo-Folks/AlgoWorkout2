const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for 'sessions'
const sessionSchema = new Schema({
    startTime: {type: Date, default: Date.now},
    endTime: {type: Date},
    questionID: String,
    userID: String
});

const sessionModel = mongoose.model('sessions', sessionSchema);

module.exports = sessionModel;