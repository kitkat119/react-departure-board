import React from 'react';
import { Train } from './Train';

export class TrainList extends React.Component {

  render() {
    return (
      {this.props.data.departures.all.map((train) => {
        return <Train train={train} />
      }
    )}

    )
}
}

// const TrainList = (props) => {
//   const trains = props.data.map((train) => {
//     return(
//       <Train train={train} />
//     )
//   })
//
//   return(
//     <div>
//       {trains}
//     </div>
//   );
// };

// export default TrainList;


    // extends React.Component {
// render() {
//   return (
//     <div>
//       <h1>London Cannon Street</h1>
//       <h2>Departures:</h2>
//       <h3>Time - Destination - Plat - Expected</h3>
//       console.log(this.props.info);
//       {this.props.data.map(train =>
//         <div><Train key={train.train_uid} train={train} /></div> )}
//     </div>
//
//   )
// }
// }
