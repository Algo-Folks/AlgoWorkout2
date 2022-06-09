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
          <p id='scores'>Total Time: </p>
          {/* // Score: 
          // Easy + Med + Hard */}
        </div>
      </div>
    )
  }
 
}
 export default MetricsContainer;
 