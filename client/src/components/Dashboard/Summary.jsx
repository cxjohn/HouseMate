import './Summary.scss';
import { Button, Card, Image } from 'semantic-ui-react';
import CurrencyFormat from 'react-currency-format';

function Summary(props) {

  function status () {
    if (props.summary < 0) {
      return <p>You are owed
                <p className="money_green"> <CurrencyFormat value={-props.summary/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
              </p>
    } else if (props.summary === 0) {
      return <p>Worry is like interest paid in advance on a debt that never comes due.</p>
    } else {
      return <p>You owe
                <p className="money_red"> <CurrencyFormat value={props.summary/100} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
              </p>
    }
  }

  return (
          <Card.Group className="dashboard_summary">
            <Card>
              <Card.Content>
                <Image
                  id="summary_profile"
                  floated='right'
                  width={60}
                  src={props.user.profile_pic}
                />
                <Card.Header>
                  Hello there,
                  <p>{props.user.first_name}!</p>
                </Card.Header>
                <Card.Description>
                  {status()}
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
          )
}

export default Summary;