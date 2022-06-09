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
  
  render() {
    console.log('App.jsx', this.state.questions)
    return (
      <div id="app">
        {this.state.questions &&  < MetricsContainer questions={this.state.questions} />}
        {this.state.questions &&  < QuestionsContainer questions={this.state.questions} />}
        {this.state.questions &&  < MainContainer questions={this.state.questions} />}
      </div>
    )
  }
}  

export default App;
