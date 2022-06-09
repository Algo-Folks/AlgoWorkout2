const express = require('express');
const path = require('path');
const sessionRouter = express.Router();
const sessionController = require('../controllers/sessionController.js');
const sessionModel = require('../models/sessionModels');

sessionRouter.get('/', sessionController.getAllSessions, (req, res) => {
    console.log('getting all sessions');
    return res.status(200).json(res.locals.sessions);
});

// get session by ID
sessionRouter.get('/:questionID', sessionController.getSessionById, (req, res) => {
    console.log(`get question by questionID: ${req.params.questionID}`);
    console.log(`found session: ${res.locals.session}`);
    return res.status(200).json(res.locals.session);
});

// create a session
sessionRouter.post('/', sessionController.createSession, (req, res) => {
    console.log(`create session:` + JSON.stringify(res.locals.session));

    res.status(200).json(res.locals.session);
});

// update a session 
sessionRouter.patch('/:questionID', sessionController.updateSession, (req, res) => {
    // return res.status(200).json(res.locals.questions);
});

module.exports = sessionRouter;