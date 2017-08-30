import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {data: 'not yet'}
  api_response = ""

  componentDidMount() {

    fetch('http://localhost:3001/')
    .then((resp) => resp.json())
    .then(function(data){
      console.log('Here is the response:');
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Test Data</h1>
        <div>{this.state.data.toString()}</div>
      </div>
    );
  };
}


export default App;
