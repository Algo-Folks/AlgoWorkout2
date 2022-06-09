const sessionModel = require ('../models/sessionModels.js')
const sessionController = {};

// get all questions
sessionController.getAllSessions = (req, res, next) => {
    console.log('at getAllSession controller');
    sessionModel.find({}).exec().then(data => {
        console.log(data);
        res.locals.sessions = data;
        next();
    }).catch(err => {
        next(err);
    })
}

// get question by ID -- probably does not work! [rough try]
sessionController.getSessionById = (req, res, next) => {
    sessionModel.findOne({'questionID': req.body.questionID}).exec().then(data => {
        res.locals.session = data;
        next();
    }).catch(err => {
        next(err);
    })
};

// create a session
sessionController.createSession = (req, res, next) => {
    console.log('creating session');
    const {userID, questionID} = req.body;
    console.log('questionID: ' + questionID);
    console.log('req.body: ' + JSON.stringify(req.body));

    sessionModel.create({userID, questionID})
    .then(data => {
        console.log('data: ' + data);
        res.locals.session = data;
        next();
    })
    .catch((err) => next(err));
}

// update a session
sessionController.updateSession = (req, res, next) => {
    console.log('req.body.questionID: ' + req.body.questionID);
    let query = {'questionID': req.body.questionID};
    req.newData.questionID = req.body.questionID;

    sessionModel.findOneAndUpdate(query, req.newData, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Successfully updated');
    });
}

module.exports = sessionController;