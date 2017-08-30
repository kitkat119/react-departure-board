import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {data: []}

  componentDidMount() {
    fetch('/')
      .then(res => res.json())
      .then(data => this.setState({data}));
  };

  render() {
    return (
      <div className="App">
        <h1>Test Data</h1>
        {this.state.data}
      </div>
    );
  }
}

export default App;
