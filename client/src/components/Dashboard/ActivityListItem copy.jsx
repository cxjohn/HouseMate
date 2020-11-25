import './ActivityListItem.scss';
import { Card, Feed } from 'semantic-ui-react'

function ActivityListItem (props) {

  function activity () {

    if (props.user_id !== props.logged_user_id) {
      
      if (props.amount < 0) {
      return <p>{props.first_name} {props.last_name} owes you 
                <p className='money_green'>${-props.amount/100}</p>
             </p>
      } else {
      return <p>You owe {props.first_name} {props.last_name} 
                <p className='money_red'>${props.amount/100}</p>
             </p>
      }
    } else {
       return <p>You are owed 
                <p className='money_green'>${-props.amount/100}</p>
             </p>
    }
  }


  return (
    <section className="dashboard_activity">
    <li>
      {activity()}
    </li>
    </section>
  )
}

export default ActivityListItem;
