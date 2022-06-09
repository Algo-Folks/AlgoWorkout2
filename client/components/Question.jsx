import React, { Component } from 'react';
import LabeledText from './LabeledText.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true
    }
  }
  render() {
    if (this.state.render) {
      return(
        <div className="questionBox">
          <a href={this.props.link}><h3 id='questionLink'>{this.props.name}</h3></a>
          <button className='button2' onClick={e => this.setState({render: false})}></button> 
        <div>
        <br></br>
        <h4 id='label'> Level: <span id='property'>{this.props.level}</span></h4> 
          <LabeledText label="Pattern" text={this.props.pattern}/>
          <LabeledText label="Companies" text={this.props.companies} />
        </div>
        <div className="flex">
          {console.log(this.props.showModal)}
        <button 
          className='button1' 
          onClick={e => {this.props.showModal(this.props.name, this.props.questionID)}}> Work On It! 💪 </button>
        </div>
      </div> 
      )
    } else return ''
    }
 
}

export default Question;