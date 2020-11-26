import { useState } from 'react';
import './SettlementForm.scss';
import SettlementFormListItem from './SettlementFormListItem';
import { Card, Image } from 'semantic-ui-react';
import Button from '../Button';



function SettlementForm(props) {

  const [formState, setFormState] = useState({
    description: props.description || "",
    amount: props.amount || "",
  })

  // function settle() {
  //   const values = document.getElementsByClassName('ui label');
  //   console.log("splitzies")
  //   // console.log("value array:", values)
  //   const users = [props.user.id];
  //   for (const value of values) {
  //     users.push(Number(value.attributes.value.value))
  //   }

  //   const splitData = {
  //     users,
  //     description: formState.description,
  //     amount_owed: Math.round((formState.amount / users.length) * 10000) / 10000,
  //     amount: formState.amount,
  //     user_id: props.user.id
  //   }
  //   console.log('vegan', splitData)

  //   return props.onSplit(splitData)
  // }

  return (
  <>
    <Card.Group className="settlement">
    <Card>
    {/* loop over props.settle */}
    {
      props.settle.map(data => 
                
        <SettlementFormListItem 
          key={data[0]}
          user_id={data[0]}
          amount={data[1]}
          first_name={data[2]}
          last_name={data[3]}
          logged_user_id={props.user.id}
          onSettle={props.onSettle}
        />
      )
    }
    </Card>
  </Card.Group>
   </>

  )
};
export default SettlementForm;

