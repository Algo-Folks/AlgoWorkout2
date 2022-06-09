import React from 'react';

const QuestionCreator = () => (
  <div>
    <h4>Add a Question</h4>
    <div>
      <form onSubmit={console.log('you clicked me')}>
        <input
          id="value-1"
          onChange={e => action1(e.target.value)}
        />
        <button id='action-2' className="primary" type="submit">Add</button>
      </form>
    </div>
  </div>
);

export default QuestionCreator;
