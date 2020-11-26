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
          onNotify={props.onNotify}
        />
      )
    }
    </Card>
  </Card.Group>
   </>

  )
};
export default SettlementForm;

