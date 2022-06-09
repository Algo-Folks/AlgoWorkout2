import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        start: null,
        end: null,
    }
  }

  componentDidMount() {
    console.log('clock started: ' + this.props.startTime);
    this.setState({start: this.props.startTime});
  }

  render() {
    return (
      <div className="clock">
        
        <div className="outerBox" id="metrics">
        <h4>Start Time</h4>
        <br/>
        <h5>{this.props.startTime}</h5>
        {/* <p id='scores'>Total Time: </p> */}
        </div>
      </div>
    )
  }
 
}
 export default Clock;
 