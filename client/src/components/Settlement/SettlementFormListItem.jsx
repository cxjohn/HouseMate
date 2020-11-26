import { useState } from 'react';
import './SettlementForm.scss';
import { Card, Image } from 'semantic-ui-react';
import Button from '../Button';


function SettlementFormListItem(props) {

  function button () {

    if (props.amount > 0) {
      return <Button settle onClick={settle}>Settle</Button>
    } else {
      return <Button notify onClick={notify}>Notify</Button>
    }
  }

  function notify () {

    return props.onNotify()

  }

  function settle () {

    const users = [props.logged_user_id, props.user_id]

    const settleData = {
      users,
      amount_owed: props.amount / 100,
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
          TEST {props.first_name}
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

