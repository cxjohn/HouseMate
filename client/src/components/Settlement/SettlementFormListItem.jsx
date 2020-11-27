import { useState } from 'react';
import './SettlementFormListItem.scss';
import { Card, Image } from 'semantic-ui-react';
import Button from '../Button';
import '../Button.scss';


function SettlementFormListItem(props) {

  function button () {

    if (props.amount > 0) {
      return <p>You owe {props.first_name} {props.last_name} <p className='money_red'>${props.amount}</p> <Button settle onClick={settle}>Settle</Button></p>
    } else if (props.amount === 0) {
      return null
    } else
      return <p>{props.first_name} {props.last_name} owes you <p className='money_green'>${-props.amount}</p> <Button notify onClick={notify}>Notify</Button></p>
    }


  function notify () {

    return props.onNotify()

  }

  function settle () {

    const users = [props.logged_user_id, props.user_id]

    const settleData = {
      users,
      amount_owed: props.amount,
      description: "settled",
      user_id: props.logged_user_id,
      is_expense: false
    }
    return props.onSettle(settleData)
  }

  return (
    <>
      <Card.Content>
        {/* <Image
          floated='right'
          size='mini'
          src='images/logo192.png'
        /> */}
        {/* <Button split className=".button_test"></Button> */}
        <Card.Header>
          {/* {props.first_name} */}
          {button()}
          {/* <Button split className=".button_test"></Button> */}
        </Card.Header>
        {/* <Card.Meta>Total balance of:</Card.Meta> */}
        <Card.Description>
          {/* {status()} */}
          {/* Steve wants to add you to the group <strong>best friends</strong> */}
        </Card.Description>
      </Card.Content>
    </>
  )
};
export default SettlementFormListItem;

