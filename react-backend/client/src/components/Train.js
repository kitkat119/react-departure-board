import React from 'react';

export class Train extends React.Component {
  render() {
    return(
      <div> {this.props.train.date} </div>
    )
  }
}
// } (train) => {
//   return(
//     <div> {train.date} </div>
//   )
// }

// export default Train;

// export class Train extends React.Component {
// render() {
//   return (
//     <div key={train.train_uid}>
//       {train.aimed_departure_time}
//       {train.destination_name}
//       {train.platform}
//       {train.expected_departure_time}
//     </div>
//
//   )
// }
// }
