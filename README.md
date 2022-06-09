# Roadmap & Progress Log

### Description:
https://docs.google.com/document/d/1PuVTBu2CNC6ZLt0P0CWeue1tPP2sP9sweS5I7oEdl7w/edit?usp=sharing
## MVP Core Features
1. Function for choosing which problem a user should do next, based on their scores on previous problems across 15 categories.

2. Timer for logging a user’s practice session on a given day.

## Setup:
* [x] Package.json dependencies. NPM install.
* [x] Webpack setup and folder structure: backend (node / express), frontend (react/redux), database (mongoose)
* [x] Create database on MongoDB.com. Get Mongo_URI link string and place in repo.
* [ ] Design database schema: 
    * [x] server/models/algoModels --> Schema for an algo problem
    * [x] created [wireframes for dashboard & data models](/docs/wireframe_june7.png) using ExCaliber


================================================================
## Task 1. AlgoModel / Controller / Component
* [x] Put 3 dummy problems in MongoDB database. 
* [x] Enable DataAPI in MongoDB database through Atlas UI: "read and write."
* [x] Create API key. Generate Axios snippet and put into codebase.
* [x] Test GET routes for database in Postman
* [x] Set up server.js & algoController to GET a problem.
* [x] Call backend API from App.jsx, and save data into state.
* [x] Display question in question container in the front end, <del>with</del> without Redux

<del>* [ ] Multiple steps: Figure out Redux actions / dispatch / reducer for getting a problem... </del>

## Log 1
### Tue. 6/7/22 
* [1:53pm] -- Finished initial setup for app: webpack, Node/Express, React/Redux, MongoDB
* [3:47pm] -- Created [wireframe](/docs/wireframe_june7.png) in Excaliber, and roughly planned out database schema and React components
* [4:50pm] -- Messed around with MongoDB then Postgres then back to MongoDB. Will stick with MongoDB. Added 3 sample questions as documents to collection in database.
* [7:03pm] -- Really struggled with getting anything to work on remote MongoDB database. Won't let me change settings or add endpoints. Finally moved to local MongoDB database. Had to delete and reinstall node modules to get this to work. Very frustrating!!

* [8:30pm] -- SCOPE MODIFICATION:
--> Aim just to have leetcode problems display in dashboard.
--> Goal is to gain a better understanding of React/Redux and MongoDB/Mongoose. Don't worry too much about the product.

------ 

* [10:27pm] -- Took a long break to have dinner with my partner's family, and having trouble getting motivated to start again. What do I need to do? 

--> Don't need to test GET/POST/DELETE endpoints in Postman because maybe it doesn't work so well...
--> Setting up MongoDB locally is a much better idea. Though I'm really tempted to switch to Postgres simply because I'm more familiar with it.

Next step:
Try to simply get one card into Mongo database and fetched into server.js


### Wed. 6/8/22
Early morning -- connecting with everyone and helping troubleshoot.
Now back to problem of displaying data in React components.

* [11:44am] -- Display cards in front end React. Fetch from API working.
* [3:04pm] -- Rearchitect without Redux. Redux is overkill for this project. Just getting the data to pass from MongoDB local database through Express to App.jsx in the front end.
* [3:51pm] -- Nurbek saves the day. Realized I didn't configure a proxy in webpack-dev-server, which is why it wouldn't load properly.
* [5:13pm] -- Props drilled down to QuestionsContainer component. Reorganized three main containers in App.js to be: Metrics Container, Questions Container, Main Container (Kanban). Now finally: the Questions component.
* [6:33pm] -- Finally got the questions to display! Task 1 finished. Now decide on next tasks and prioritize, scope given limited time.

================================================================
### Brainstorm

__1. Pause and think: Do users need to be able to create/update questions or delete questions?__
--> No, users do not need to delete questions. Instead users can delete practice sessions.
--> Users can add a custom question. 
--> What fields would a user need to update? 
    * Practice sessions times
    * Categorize which kanban category it's in

__2. What about sessions?__ 
--> Users need to be able to add a practice session: "clock into a problem"
--> Users can optionally delete a session? (just to complete the assignment of CRUD functionality)

__3. How are sessions organized and linked to a user and a question?__
--> Sessions are created at a button press when a user works on a problem
--> Sessions are stored chronologically on a user's database, under session property (session id)
--> Since MongoDB allows for nested arrays instead of keys, it's possible to simply store 
sessions in the user document, rather than a separate session document.

--> A session will have the following properties:
* Date/Time start
* Date/Time end
* QuestionID
* UserID (stored for redundancy?)

--> A user will have the following properties:
* Username
* Email
* Password
* Sessions: {}
* Questions: { question_id: {status: completed, sessions: [session_id], scores: []} }
* Badges: {} -- for patterns completed
* Questions_completed: {easy: # , medium: # , hard: # }
* Score / Level -- overall points earned
        --> Easy/Med/Hard have different points.
        --> Mastering a pattern earns a certain number of points.
        --> Number of consecutive sessions earns a certain number of points. (adv. feature)

================================================================

## Next Tasks
<ol>
    <li> [x] Session modal &timer </li>
    <li> [ ] CRUD functionality for questions: Create, Update (Delete?) </li>
    <li> [ ] Instead of deleting question, move it to main container kanban? </li>
    <li> [ ] Metrics container: totals display </li>
    <li> [ ] Question picker functionality </li>
    <li> [ ] Main container: 4 kanban sections </li>
    <li> [ ] User login/registration </li>
</ol>

## Task 2. CRUD Functionality for questions: Create, Update, Delete
* [ ] Create session modal & timer
    * [x] Functioning modal to log time spent on a question
    * [x] Spiffy animation

* [ ] Session schema & endpoints:
    * [x] Create session schema
    * [x] Create session
    * [ ] Find session by questionID
    * [ ] Update session

* [ ] Display timer:
    * [ ] Show start time in modal.
    * [ ] Show end time in modal.
    

<del> * [ ] Create routes/API endpoints for:
    * [ ] Find one question by ID 
    * [ ] Create question
    * [ ] Update question

*  [ ] Create forms for: 
    * [ ] Create question form
    * [ ] Update question form </del>


================================================================

## Log 2
### Wed. 6/8/22
* [7:10pm] Ready to tackle Task 2, and meet the basic requirements of the assignment.
First: write express route for find one question by ID.
* [7:49pm] Gave a rough try to GetQuestionByName ... FindOne()
* [9:39pm] Display modal (for creating a session). Figured out stupid bug with button that won't click because of webpack double import: https://stackoverflow.com/questions/67099424/react-onclick-not-working-in-any-components After removing the build script from index.html, now the button works in a basic way.
* [10:05pm] Working modal with pomodoro image! Easy wins.
* [11:44pm] Too easy to waste a lot of time on fun styling once the main components are working! Go back to focusing on CRUD routes!
* Worked past midnight on trying to create a session, by passing in Question ID. Could not do this on my own. Asked for help with Satty. The solution he helped me with by 5am allowed for a randomly generated questionID by "nanoid" library to be saved in the database, however, I am still unable to save the question ID of the question where the button is being pressed. 

### Thu. 6/9/22
* [8:46am] Spent another hour working on trying to pass questionID into the 'post' route to the session database. Able to follow the path of the data from the back end to the front end, and get more insight into the way the routing is working. However, still unable to solve error, not saving questionID from res.locals.session into new MongoDB document upon 'post' request and .save().

Error message from front end:
```
Uncaught Error: Expected `onClick` listener to be a function, instead got a value of `object` type.
```

I've re-wrote this method and took it apart to try to understand why this error might be happening, but it seems like I am passing a function, not an object. What is this error referrring to? 

* [9:39am] Finally realized that the values are actually updating correctly in the MongoDB database, but simply requires multiple page clicks to get to the end of over 1700+ session documents. Had just put up a help desk ticket on Slack, lol. Well, onto the next problem! 

Will load some basic data into my database so that it is more useful for the demo.

* [11:54am] Moving forward: continuing with update functionality for session. 



================================================================

## Footnotes

### Credits:
Gif Animation "Running out of Time" by Tony Babel
https://dribbble.com/shots/3205975-Running-out-of-time/attachments/9703363?mode=media

### Nice to haves:
* Card colors changing based on difficulty level