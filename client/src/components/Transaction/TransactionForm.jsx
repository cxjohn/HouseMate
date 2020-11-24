import { useState } from 'react';
import Button from '../Button';
import './TransactionForm.scss';
import { Dropdown } from 'semantic-ui-react';

const friends = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]


function TransactionForm (props) {
  
  const [formState, setFormState] = useState({
    description: props.description || "",
    amount: props.amount || "",
  })

  return(
    <>
    <span>TRANSITION FORM TEST</span>
    <form onSubmit={ event => event.target.preventDefault }>
      <Dropdown placeholder='Skills' fluid multiple selection options={friends} />

      <span class="input"></span>
      <input
        className='description' 
        placeholder='Description'
        value={formState.description}
        onChange={event => setFormState({...formState, description: event.target.value })}
        required
        autoFocus
        autocomplete="off"
      />
      <span class="input"></span>
      <input
        className='amount'
        placeholder='$0.00'
        value={formState.amount}
        onChange={event => setFormState({...formState, amount: event.target.value })}
        required
        autocomplete="off"
      />
      <Button split >Splitzies</Button>
    </form>

  </>
  )

 
};
export default TransactionForm;

