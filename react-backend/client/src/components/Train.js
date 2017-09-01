import React from 'react';

class Train extends React.Component {
  render() {
    return(
      <div> {this.props.train.aimed_departure_time} {this.props.train.destination_name} {this.props.train.platform} {this.props.train.expected_departure_time}</div>
    )
  }
}

export default Train;
