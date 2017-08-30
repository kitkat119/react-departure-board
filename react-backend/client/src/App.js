import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  apiData = { data: 'not yet' }

  componentDidMount() {
    var component = this
    fetch('http://localhost:3001/')
    .then((resp) => resp.json())
    .then(function(data){
      console.log(data)
      console.log(data.greeting)
      component.apiData.data = data.greeting.toString();
      component.setState({
        apiData: data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Test Data</h1>
        <div>{ this.apiData.data }</div>
      </div>
    );
  };
}

export default App;
