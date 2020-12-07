import './ActivityListItem.scss';
import { Card, Feed, Divider } from 'semantic-ui-react'
import  Moment  from 'react-moment';
import CurrencyFormat from 'react-currency-format';

function ActivityListItem (props) {

  function activity () {

    if (props.user_id !== props.logged_user_id) {

      if (props.description === "settled") {
        return  <span className='activity_block'>
                  <p><b className='settle_up'>{props.first_name} {props.last_name}</b> settled up with you</p>
                </span>
      } else if (props.amount < 0) {
      return <span className='activity_block'>
              <p><b>You</b> paid for {props.description} </p>
              <p><b>{props.first_name} {props.last_name}</b> owes you 
                <p className='money_green'><CurrencyFormat value={-props.amount/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
              </p>
             </span>
      } else {
      return <span className='activity_block'>
              <div className="payment"><b>{props.first_name} {props.last_name}</b> paid for <b>{props.description}</b></div>
                <p>You owe <p className='money_red'><CurrencyFormat value={props.amount/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
                </p>
             </span>
      }
    } else {

      if (props.description === "settled") {
        return  <span className='activity_block'>
                  <p> You settled with <b className='owe'>{props.first_name} {props.last_name}</b></p>
                </span>
      } else {
       return <span className='activity_block'>
                <div className="payment"><b>You</b> paid for <b>{props.description}</b></div>
                <p>You are owed 
                  <p className='money_green'><CurrencyFormat value={-props.amount/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
                </p>
              </span>
      }
    }
  }


  return (
        <>
        <Feed.Event className="dashboard_activity">
          <Feed.Label className='activity_image' image={props.profile_pic} />
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
