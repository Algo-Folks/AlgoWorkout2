const algoModel = require ('../models/algoModels.js')

const algoController = {};

// get all questions
algoController.getAllQuestions = (req, res, next) => {
    console.log('at getQuestions controller');
    algoModel.find({}).exec().then(data => {
        console.log(data);
        res.locals.questions = data;
        next();
    }).catch(err => {
        next(err);
    })
}

// get question by ID -- probably does not work! [rough try]
algoController.getQuestionByName = (req, res, next) => {
    console.log('at getQuestionsByID controller');
    algoModel.findOne({req}).exec().then(data => {
        console.log(data);
        res.locals.question = data;
        next();
    }).catch(err => {
        next(err);
    })
}

// create a question
algoController.createQuestion = (req, res, next) => {
    console.log('creating question form controller');
    const Question = mongoose.model('question', algoSchema);
}

module.exports = algoController;