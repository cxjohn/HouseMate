import { useState } from 'react';
import Button from '../Button';
import { Dropdown } from 'semantic-ui-react';
import './GroupDropdown.scss';
// import classnames from 'classnames';


function GroupDropdown(props) {
 
  const friends = []
  props.friends_list.map((friend) => {

    const friend_object = {
      key: friend[0],
      text: `${friend[1]} ${friend[2]}`,
      value: friend[0]
    };
    friends.push(friend_object)
  })

  const groups = []
  props.groups_list.map((group) => {

    const group_object = {
      key: group[0],
      text: `${group[1]}`,
      value: group[0]
    };
    groups.push(group_object)
  })

  const [formState, setFormState] = useState({
    description: props.description || "",
    amount: props.amount || "",
    group: false
  })


  function splitFriends() {
    const values = document.getElementsByClassName('ui label');
    const users = [props.user.id];
    for (const value of values) {
      users.push(Number(value.attributes.value.value))
    }

    const splitData = {
      users,
      description: formState.description,
      amount_owed: Math.round((formState.amount / users.length) * 10000) / 10000,
      amount: formState.amount,
      user_id: props.user.id,
      is_expense: true,
      group_id: null
    }

    return props.onSplit(splitData);
  };

  function splitGroups() {
    const selected_group_name = document.getElementById('raj').firstChild.innerHTML;
    const users = [props.user.id];

    const group = props.groups_list.filter(group => group[1] === selected_group_name)[0]

    const splitData = {
      users,
      description: formState.description,
      amount_owed: formState.amount / users.length,
      amount: formState.amount,
      user_id: props.user.id,
      is_expense: true,
      group_id: group[0]
    }

    return props.onSplit(splitData);
  };
 
  const selectFriend = (event) => {

    const selected = event.target;
    selected.nextSibling.classList.remove("option_selected");
    selected.classList.add("option_selected");
    setFormState({ ...formState, group: false })

  }
  const selectGroup = (event) => {

    const selected = event.target;
    selected.previousSibling.classList.remove("option_selected");
    selected.classList.add("option_selected");
    setFormState({ ...formState, group: true })

  }



  function friendForm () {

    return (
      <>
      <h3>Split among friends</h3>

      <span className="test form"></span>
      <form onSubmit={event => event.target.preventDefault} className="form_transaction">
        <Dropdown className="dropdown" placeholder='Mates' fluid multiple selection options={friends} />

        <span className="input"></span>
        <input
          className='description'
          placeholder='Description'
          value={formState.description}
          onChange={event => setFormState({ ...formState, description: event.target.value })}
          required
          autoFocus
          autoComplete="off"
        />
        <span className="input"></span>
        <input
          className='amount'
          type='number'
          min='0'
          step='any'
          placeholder='$0.00'
          value={formState.amount}
          onChange={event => setFormState({ ...formState, amount: event.target.value })}
          required
          autoComplete="off"
        />
        <Button split onClick={splitFriends} >Splitzies</Button>
      </form>
      </>
    )

  }

  function groupForm () {

    return (
      <>
        <h3>Split among groups</h3>
        <span className="test form"></span>
        <form onSubmit={event => event.target.preventDefault} className="form_transaction">
          <Dropdown id="raj" className="dropdown" placeholder='Groups' fluid single selection options={groups} />

          <span className="input"></span>
          <input
            className='description'
            placeholder='Description'
            value={formState.description}
            onChange={event => setFormState({ ...formState, description: event.target.value })}
            required
            autoFocus
            autoComplete="off"
          />
          <span className="input"></span>
          <input
            className='amount'
            type='number'
            min='0'
            step='any'
            placeholder='$0.00'
            value={formState.amount}
            onChange={event => setFormState({ ...formState, amount: event.target.value })}
            required
            autoComplete="off"
          />
          <Button split onClick={splitGroups} >Splitzies</Button>
        </form>
      </>
    )
  }

  return (
    <>
      
      <nav>
        <span>
          <p className="option option_selected" onClick={event => selectFriend(event)}>Friends</p>
          <p className="option" onClick={event => selectGroup(event)}>Groups</p>
        </span>
      </nav>
      {!formState.group && friendForm()}
      {formState.group && groupForm()}

    </>
  )
};
export default GroupDropdown;

