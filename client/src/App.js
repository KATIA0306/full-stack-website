import React, { Component } from 'react';
import './App.css';
import { mongo } from 'mongoose';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      options: []
    }
  }

  componentWillMount() {
    console.log('getting data from server!');

    //call server and request all questions
    fetch('/api/questions')
      .then(res => res.json())
      .then(retrievedQuestions => {
        console.log('done');

        //collect all questions
        let myQuestions = [];
        let myAnswers = [];

        retrievedQuestions.forEach(item => {
          myQuestions.push(item.content);
          myAnswers.push(item.options);
        });

        this.setState({ 
          questions: myQuestions,
          options: myAnswers 
        });
      });

  }

  render()
  {
    console.log("rendering App.js...");
    console.log(this.state.options);

    let answerDivs = [];
    
    this.state.options.forEach(option => {
      option.forEach(item => { 
        answerDivs.push(<label for={item}><input type="radio" id={item} value={item} name="question" />{item}<br /></label>);
      });
    });

    let questionDivs = this.state.questions.map((question, index) => <div key={index}>{question}</div>);
    

    console.log("...");

    return (
      <div className="App">
        <h1>Questions</ h1>
        {this.state.questions[0]}
        <br />
        <form action="">
          {answerDivs[0]}
          {answerDivs[1]}
          {answerDivs[2]}
        </form>
        <br /><br />
        {this.state.questions[1]}
        <br />
        <form action="">
          {answerDivs[3]}
          {answerDivs[4]}
          {answerDivs[5]}
        </form>
      </div>
    );
  } 
}

export default App;
