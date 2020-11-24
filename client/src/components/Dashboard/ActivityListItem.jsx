import './ActivityListItem.scss';



function ActivityListItem (props) {
  return (
    <li>
      <p>${props.amount/100} owed to {props.friend} for {props.description} </p>
    </li>
  )
}

export default ActivityListItem;


// import React from "react";
// import "components/DayListItem.scss";
// const classnames = require('classnames');


// export default function DayListItem(props) {
//   const dayClass = classnames("day-list__item", props.className, {
//     "day-list__item--selected": props.selected,
//     "day-list__item--full": props.spots === 0
//   });
  
//   return (
//     <li>
//       <h2>{props.name}</h2>
//       <h3>{formatSpots(props.spots)}</h3>
//     </li>
//   )
// }
// const formatSpots = function(spots) {
//   if (spots === 1) {
//     return spots + " spot remaining";
//   } else {
//     return spots ? spots + " spots remaining" : "no spots remaining";
//   }
// };