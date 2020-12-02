import { useState } from 'react';
import './SettlementFormListItem.scss';
import { Card, Image } from 'semantic-ui-react';
import Button from '../Button';
import '../Button.scss';
import CurrencyFormat from 'react-currency-format';


function SettlementFormListItem(props) {

  function settleCard () {

    if (props.amount > 0) {
      return  <section className="card_settle">
                <aside className="card_settle_aside">
                  <p>You owe {props.first_name} {props.last_name}</p>
                  <p className='money_red'><CurrencyFormat value={props.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
                </aside>
                <Button settle onClick={settle}>Settle</Button>
              </section>
    // fix the zero amount condition in the back end 
    } else if (props.amount === 0) {
      return null
    } else
      return  <section className="card_settle">
                <aside className="card_settle_aside">
                  <p>{props.first_name} {props.last_name} owes you</p>
                  <p className='money_green'><CurrencyFormat value={-props.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>

                </aside>
                <Button notify onClick={notify}>Notify</Button>
              </section>
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
      is_expense: false,
      group_id: null
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
          {settleCard()}
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

