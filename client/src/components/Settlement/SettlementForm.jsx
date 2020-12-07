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
  <h2 className='settle_text'>Settle Here</h2>
    <Card.Group className="settlement">
    <Card>
    {
      props.settle.map(data => 

          <SettlementFormListItem 
          key={data[0]}
          user_id={data[0]}
          amount={data[1]/100}
          first_name={data[2]}
          last_name={data[3]}
          logged_user_id={props.user.id}
          onSettle={props.onSettle}
          onNotify={props.onNotify}
        />
        )
    }
    { 
      props.settle.length === 0 &&
            <Card.Content>
              <Card.Header className='even_steven'>
                <p>&#x1F389;  You are even-steven!  &#x1F389;</p>
              </Card.Header>
          </Card.Content>
    }      

    </Card>
  </Card.Group>
   </>

  )
};
export default SettlementForm;

