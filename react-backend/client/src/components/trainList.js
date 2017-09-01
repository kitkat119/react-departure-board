import React, { Component } from 'react';
import App from '../App';
import Train from './Train';


class TrainList extends Component {

  render() {
    return (
      <div>
      {this.props.data.all.map((train) => {
        return <Train train={train} />
      }
    )}
  </div>
  )
  }
}

export default TrainList;
