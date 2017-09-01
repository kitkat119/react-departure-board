import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TrainList from './components/trainList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      all: [{
        aimed_departure_time: '',
        destination_name: 'Loading...',
        platform: '',
        expected_departure_time: ''
      }]
    }
  }
};

  componentDidMount() {
    var component = this;
    var cannon_street_url = 'https://railwoodpecker.herokuapp.com/'

    setInterval(function() {
      fetch(cannon_street_url)
      .then((resp) => resp.json())
      .then(function(data){
        component.setState({
          data: data.departures
        });
      })
    }, 10000);
  }

  render() {

    return (
      <div className="App">
        <h1>London Cannon Street</h1>
        <h2>Departures:</h2>
        <h3>Time - Destination - Plat - Expected</h3>

         <TrainList data={this.state.data} />
      </div>
    );
  };
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
