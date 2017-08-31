import React from 'react';
import { Train } from './Train';

export class TrainList extends React.Component {
render() {
  return (
    <div>
      <h1>London Cannon Street</h1>
      <h2>Departures:</h2>
      <h3>Time - Destination - Plat - Expected</h3>
      console.log(this.props.info);
      {this.props.info.all.map(train =>
        <div><Train key={train.train_uid} train={train} /></div> )}
    </div>

  )
}
}
