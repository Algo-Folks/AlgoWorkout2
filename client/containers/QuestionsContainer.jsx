 import React, { Component } from 'react';
 import Question from '../components/Question.jsx';
 import SessionContainer from './SessionContainer.jsx';
 import { nanoid } from 'nanoid';
 class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      modalName: '',
      questionID: null,
      userID: "1"
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (name, id) => {
    console.log(`show modal ${id}`);
    this.setState({
      modalShow: true,
      modalName: name,
      questionID: id,
    });
  }

  hideModal = () => {
    this.setState({modalShow: false});
  }

  render() {
    const todaysQuestions = this.props.questions.map((q, i) => {
          console.log('qname: ' + q.name);
          return <Question 
            key={nanoid()} 
            questionID = {i.toString()}
            userID = "1"
            name={q.name} 
            link={q.link} 
            level={q.level}
            pattern={q.pattern}
            resources={q.resources} 
            companies={q.companies}
            description={q.description}
            showModal={this.showModal}
          />
    });
  
    return (
      <div className="questionsContainer">
        <div className="innerbox">
          <h3>Today's Questions</h3>

        <SessionContainer 
          name={this.state.modalName}
          link={this.state.modalName}  
          show={this.state.modalShow} 
          handleClose={this.hideModal}
          questionID={this.state.questionID}
          userID = {this.state.userID}
        >Session</SessionContainer>
          <div>
            {console.log(todaysQuestions)}
            {todaysQuestions}
          </div>
        </div>
      </div>
    );
  };
 
}

 export default QuestionsContainer;
 