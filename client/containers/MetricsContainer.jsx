import React from 'react';
 

class MetricsContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="metricsContainer">
        <h2>Metrics</h2>
        <div className="outerBox" id="metrics">
          {/* <QuestionsContainer questions={this.props.questions}/> */}
          <h4 id='scores'>Total Time: </h4>
          <p id='scores'>Easy / Medium / Hard: </p>
          {/* // Score: 
          // Easy + Med + Hard */}
          
        </div>
      </div>
    )
  }
 
}
 export default MetricsContainer;
 