import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  apiData = { data: 'Loading...' }

  componentDidMount() {
    var component = this
    var localhost_url = 'http://localhost:3001/'
    var cannon_street_url = 'http://transportapi.com/v3/uk/train/station/CST/live.json?type=departure&app_id=88e9b09b&app_key=b67f9c0a642d1931247492f109f1d561'
    fetch(cannon_street_url)
    .then((resp) => resp.json())
    .then(function(data){
      console.log(data)
      component.apiData.data = data.departures;
      component.setState({
        apiData: data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>London Cannon Street</h1>
        <h2>Departures:</h2>
        <h3>Time	Destination	Plat	Expected</h3>
        { console.log(this.apiData.data.all) }

        { console.log(this.apiData.data.all ? this.apiData.data.all[0] : 'none') }


      </div>
    );
  };
}

export default App;
