import React from 'react';
import LabeledText from './LabeledText.jsx';

// const startTimer = (props) => {
//   props.showModal(props.name, props.questionID);
// }

const Question = (props) => (
  <div className="questionBox">
    <a href={props.link}><h3 id='questionLink'>{props.name}</h3></a>
    <button className='button2'></button> 
    <div>
      <br></br>
      <h4 id='label'> Level: <span id='property'>{props.level}</span></h4> 
      <LabeledText label="Pattern" text={props.pattern}/>
      <LabeledText label="Companies" text={props.companies} />
    </div>
    <div className="flex">
      {console.log(props.showModal)}
      <button 
        className='button1' 
        onClick={e => {props.showModal(props.name, props.questionID)}}> Work On It! 💪 </button>
    </div>
  </div>
);

export default Question;


// props.showModal(props.name)