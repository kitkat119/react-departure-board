import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  apiData = { data: {
      all: [{
        aimed_departure_time: '',
        destination_name: 'Loading...',
        platform: '',
        expected_departure_time: ''
      }]
    }
  }

  componentDidMount() {
    var component = this
    var localhost_url = 'http://localhost:3001/'
    var cannon_street_url = 'https://railwoodpecker.herokuapp.com'

    fetch(cannon_street_url)
    .then((resp) => resp.json())
    .then(function(data){
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
        <h3>Time - Destination - Plat - Expected</h3>
        { console.log(this.apiData) }
        <ul>
          {this.apiData.data.all.map(train =>
            <li key={train.train_uid}>
              {train.aimed_departure_time}
              {train.destination_name}
              {train.platform}
              {train.expected_departure_time}
            </li>
          )}
        </ul>
      </div>
    );
  };
}

export default App;
