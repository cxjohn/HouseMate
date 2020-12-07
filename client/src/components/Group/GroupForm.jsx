import { useState } from 'react';
import Button from '../Button';
import './GroupForm.scss';
import { Dropdown } from 'semantic-ui-react';

function GroupForm(props) {
  
  const friends = []
  props.friends_list.map((friend) => {

    const friend_object = {
      key: friend[0],
      text: `${friend[1]} ${friend[2]}`,
      value: friend[0]
    };
    friends.push(friend_object)
  })

  const [formState, setFormState] = useState({
    name: props.name || ""
  })

  function group () {
    
    const group_name = formState.name;
    const values = document.getElementsByClassName('ui label');
    const users = [props.user.id];
    for (const value of values) {
      users.push(Number(value.attributes.value.value))
    }

    const groupData = {
      users,
      name: group_name
    }

    return props.onGroup(groupData);
  }

  return (
    <>
        <span className="test form"></span>
        <form onSubmit={event => event.target.preventDefault} className="form_group">
          <span className="input"></span>
          <input
            className='group_name'
            placeholder='Group Name'
            value={formState.name}
            onChange={event => setFormState({ ...formState, name: event.target.value })}
            required
            autoFocus
            autoComplete="off"
          />
      
          <Dropdown className="dropdown" placeholder='Mates' fluid multiple selection options={friends} />
          <Button group onClick={group} >Add Group</Button>
        </form>

    </>
  )


};
export default GroupForm;
