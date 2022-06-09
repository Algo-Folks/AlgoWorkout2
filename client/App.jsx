import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import QuestionsContainer from './containers/QuestionsContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };

    this.completeQuestion = this.completeQuestion.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8888/api")
      .then((data) => data.json())
      .then((data) => this.setState({
        questions: data
      }))
      .catch((err) => console.log(err) 
    )
  }

  completeQuestion(question) {
    let newQuestions = [];
    for (q of this.state.questions) {
      if (!q == question) {
        newQuestions.push(q);
      }
    }
    this.setState({questions: newQuestions});
    return newQuestions;
  }
  
  render() {
    console.log('App.jsx', this.state.questions)
    return (
      <div id="app">
        {this.state.questions &&  < MetricsContainer questions={this.state.questions} />}
        {this.state.questions &&  < QuestionsContainer questions={this.state.questions} completeQuestion={this.completeQuestion} />}
        {this.state.questions &&  < MainContainer questions={this.state.questions} />}
      </div>
    )
  }
}  

export default App;
