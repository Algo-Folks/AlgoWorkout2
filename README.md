# Roadmap & Progress Log

```
npm run dev
```

![demo1](/docs/demo1.png)

### Description:
https://docs.google.com/document/d/1PuVTBu2CNC6ZLt0P0CWeue1tPP2sP9sweS5I7oEdl7w/edit?usp=sharing

## MVP Core Features
1. Function for choosing which problem a user should do next, based on their scores on previous problems across 15 categories.

2. Timer for logging a user’s practice session on a given day.

![demo2](/docs/demo2.png)


## Presentation:

![Presentation](/docs/presentation.png)

https://www.canva.com/design/DAFDJhBV-K8/8tAqo-lQIMRfDDib0COPXQ/view?utm_content=DAFDJhBV-K8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebuttongit 

----------

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

### Tue. 6/7/22 
* [1:53pm] -- Finished initial setup for app: webpack, Node/Express, React/Redux, MongoDB
* [3:47pm] -- Created [wireframe](/docs/wireframe_june7.png) in Excaliber, and roughly planned out database schema and React components
* [4:50pm] -- Messed around with MongoDB then Postgres then back to MongoDB. Will stick with MongoDB. Added 3 sample questions as documents to collection in database.
* [7:03pm] -- Really struggled with getting anything to work on remote MongoDB database. Won't let me change settings or add endpoints. Finally moved to local MongoDB database. Had to delete and reinstall node modules to get this to work. Very frustrating!!

* [8:30pm] -- SCOPE MODIFICATION:
--> Aim just to have leetcode problems display in dashboard

------ 

* [10:27pm] -- 
--> Setting up MongoDB locally is a much better idea. 

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

## Footnotes

### Credits:
Gif Animation "Running out of Time" by Tony Babel
https://dribbble.com/shots/3205975-Running-out-of-time/attachments/9703363?mode=media

### Nice to haves:
* Card colors changing based on difficulty level
