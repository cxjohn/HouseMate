import { useState } from 'react';
import './SettlementForm.scss';
import { Card, Image } from 'semantic-ui-react';
import Button from '../Button';


function SettlementForm(props) {

  const [formState, setFormState] = useState({
    description: props.description || "",
    amount: props.amount || "",
  })

  function split() {
    const values = document.getElementsByClassName('ui label');
    console.log("splitzies")
    // console.log("value array:", values)
    const users = [props.user.id];
    for (const value of values) {
      // console.log("name: ", value.innerText)
      // console.log("id: ", value.attributes.value.value)
      // console.log("desc ", formState.description)
      // console.log("amount ", formState.amount)
      users.push(Number(value.attributes.value.value))
    }

    const splitData = {
      users,
      description: formState.description,
      amount_owed: Math.round((formState.amount / users.length) * 10000) / 10000,
      amount: formState.amount,
      user_id: props.user.id
    }
    console.log('vegan', splitData)

    return props.onSplit(splitData)
  }

  return (
  <>
    <Card.Group className="settlement">
    <Card>
      <Card.Content>
        {/* <Image
          floated='right'
          size='mini'
          src='images/logo192.png'
        /> */}
        <Button split className=".button_test"></Button>
        <Card.Header>
          LOGGED IN USERNAME
          {/* <Button split className=".button_test"></Button> */}
        </Card.Header>
        {/* <Card.Meta>Total balance of:</Card.Meta> */}
        <Card.Description>
          {/* {status()} */}
          {/* Steve wants to add you to the group <strong>best friends</strong> */}
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
   </>

  )
};
export default SettlementForm;

