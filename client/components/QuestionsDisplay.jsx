import React from 'react';
import Question from './Question.jsx';


const QuestionsDisplay = props => (
  <div className="displayBox">
    <h4>Today's Picks</h4>
    <div className="Today's Questions">
      <Question/>
    </div>
  </div>
);

export default QuestionsDisplay;
