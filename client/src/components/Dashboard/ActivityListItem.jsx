import './ActivityListItem.scss';
import { Card, Feed, Divider } from 'semantic-ui-react'
// import React from 'react';
import  Moment  from 'react-moment';

function ActivityListItem (props) {

  function activity () {

    if (props.user_id !== props.logged_user_id) {

      if (props.description === "settled") {
        return  <span className='activity_block'>
                  <p>{props.first_name} {props.last_name} settled up with you</p>
                </span>
      } else if (props.amount < 0) {
      return <span className='activity_block'>
              <p> You paid for {props.description} </p>
              <p>{props.first_name} {props.last_name} owes you 
                <p className='money_green'>${-props.amount/100}</p>
              </p>
             </span>
      } else {
      return <span className='activity_block'>
              <div className="payment">{props.first_name} {props.last_name} paid for <b>{props.description}</b></div>
                <p>You owe <p className='money_red'>${props.amount/100}</p>
                </p>
             </span>
      }
    } else {

      if (props.description === "settled") {
        return  <span className='activity_block'>
                  <p> You settled with {props.first_name} {props.last_name}</p>
                </span>
      } else {
       return <span className='activity_block'>
                <div className="payment">You paid for <b>{props.description}</b></div>
                <p>You are owed 
                  <p className='money_green'>${-props.amount/100}</p>
                </p>
              </span>
      }
    }
  }


  return (
        <>
        <Feed.Event className="dashboard_activity">
          <Feed.Label image='images/logo192.png' />
          <Feed.Content>
            <Moment fromNow>{props.date}</Moment>
            <Feed.Summary>
              {activity()}      
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Divider />
        </>

  )
}

export default ActivityListItem;
