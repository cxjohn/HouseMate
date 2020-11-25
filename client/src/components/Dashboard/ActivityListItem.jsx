import './ActivityListItem.scss';
import { Card, Feed } from 'semantic-ui-react'

function ActivityListItem (props) {

  function activity () {

    if (props.user_id !== props.logged_user_id) {
      
      if (props.amount < 0) {
      return <span className='activity_block'>
              <p> You paid for <b>{props.description}</b> </p>
              <p>{props.first_name} {props.last_name} owes you 
                <p className='money_green'>${-props.amount/100}</p>
              </p>
             </span>
      } else {
      return <span className='activity_block'>
              {props.first_name} {props.last_name} paid for <b>{props.description}</b>
                <p>You owe <strong>{props.first_name} {props.last_name}</strong> 
                  <p className='money_red'>${props.amount/100}</p>
                </p>
             </span>
      }
    } else {
       return <span className='activity_block'>
                You paid for <b>{props.description}</b>
                <p>You are owed 
                  <p className='money_green'>${-props.amount/100}</p>
                </p>
              </span>
    }
  }


  return (
  
        <Feed.Event className="dashboard_activity">
          <Feed.Label image='images/logo192.png' />
          <Feed.Content>
            <Feed.Date content='STRETCH: 1 day ago' />
            <Feed.Summary>
              {activity()}
              {/* You added <a>Jenny Hess</a> to your <a>coworker</a> group. */}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

  )
}

export default ActivityListItem;
