import { useState } from 'react';
import Button from '../Button';
import './TransactionForm.scss';
import { Dropdown } from 'semantic-ui-react';

const friends = [
  { key: 5, text: 'Chris John', value: 5 },
  { key: 3, text: 'Raj Ghatore', value: 3 },
  { key: 4, text: 'Sean Kim', value: 4 },
  { key: 2, text: 'Hobart', value: 2 },
  { key: 1, text: 'Bobert', value: 1 }
]


function TransactionForm(props) {

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
      <span className="test form">TRANSITION FORM TEST</span>
      <form onSubmit={event => event.target.preventDefault} className="form_transaction">
        <Dropdown placeholder='Mates' fluid multiple selection options={friends} />

        <span class="input"></span>
        <input
          className='description'
          placeholder='Description'
          value={formState.description}
          onChange={event => setFormState({ ...formState, description: event.target.value })}
          required
          autoFocus
          autocomplete="off"
        />
        <span class="input"></span>
        <input
          className='amount'
          type='number'
          min='0'
          step='any'
          placeholder='$0.00'
          value={formState.amount}
          onChange={event => setFormState({ ...formState, amount: event.target.value })}
          required
          autocomplete="off"
        />
        <Button split onClick={split} >Splitzies</Button>
      </form>

    </>
  )


};
export default TransactionForm;

