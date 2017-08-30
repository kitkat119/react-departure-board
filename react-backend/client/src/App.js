import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {data: 'none'}
  ary = ['I am ary']

  componentDidMount() {

    fetch('http://localhost:3001/')
    .then(function(response){
      console.log('Here is the response:')
      console.log(response)
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
