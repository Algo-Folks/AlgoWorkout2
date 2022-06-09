const express = require('express');
const path = require('path');
const router = express.Router();
const algoController = require('../controllers/algoController.js');

router.get('/', algoController.getAllQuestions, (req, res) => {
    console.log('getting all questions');
    return res.status(200).json(res.locals.questions);
});

// get question by ID
router.get('/:name', algoController.getQuestionByName, (req, res) => {
    console.log(`get question by name: ${req.params.name}`);
    return res.status(200).json(res.locals); // res.locals?
});

// create a question
router.post('/', algoController.createQuestion, (req, res) => {
    console.log(`create question: ${req.params.link}`);
    return res.status(200).json(res.locals); // res.locals?
});

// update questions
// router.get('/', algoController.updateQuestions, (req, res) => {
//     return res.status(200).json(res.locals.questions);
// });



module.exports = router;