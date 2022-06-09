import React from 'react';
import QuestionCreator from '../components/QuestionCreator.jsx';
class MainContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <h2>Patterns Mastered</h2>
      <div className="kanban">
        <div className="pattern">
          <h6>Sliding Windows</h6>
          <img src='../docs/swindows.png'/>
        </div>
        <div className="pattern">
          <h6>Breadth First Search</h6>
          <img src='../docs/bfs.png'/>
        </div>
        <div className="pattern">
          <h6>Caching/Memoization</h6>
          <img src='../docs/memo.png'/>
        </div>
      </div>
      </>
    )
  }
 
}
 export default MainContainer;
 