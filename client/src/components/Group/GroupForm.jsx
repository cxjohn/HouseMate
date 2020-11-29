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
    // description: props.description || "",
  })

  function group () {
    
    const group_name = formState.name;
    const values = document.getElementsByClassName('ui label');
    console.log("groupsies", group_name)
    // console.log("value array:", values)
    const users = [props.user.id];
    for (const value of values) {
    //   // console.log("name: ", value.innerText)
    //   // console.log("id: ", value.attributes.value.value)
    //   // console.log("desc ", formState.description)
    //   // console.log("amount ", formState.amount)
      users.push(Number(value.attributes.value.value))
    }

    // console.log(`add these ${users} friends to group ${group_name}!`)
    const groupData = {
      users,
      name: group_name
    }

    return props.onGroup(groupData);

  }

  // function split() {
  //   const values = document.getElementsByClassName('ui label');
  //   console.log("splitzies")
  //   // console.log("value array:", values)
  //   const users = [props.user.id];
  //   for (const value of values) {
  //     // console.log("name: ", value.innerText)
  //     // console.log("id: ", value.attributes.value.value)
  //     // console.log("desc ", formState.description)
  //     // console.log("amount ", formState.amount)
  //     users.push(Number(value.attributes.value.value))
  //   }

  //   const splitData = {
  //     users,
  //     description: formState.description,
  //     amount_owed: Math.round((formState.amount / users.length) * 10000) / 10000,
  //     amount: formState.amount,
  //     user_id: props.user.id,
  //     is_expense: true
  //   }
  //   console.log('vegan', splitData)

  //   return props.onSplit(splitData)
  // }

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
          {/* <span className="input"></span> */}
    
          {/* <input
            className='group_name'
            placeholder='Group Name'
            value={formState.description}
            onChange={event => setFormState({ ...formState, description: event.target.value })}
            required
            autoFocus
            autoComplete="off"
          /> */}
          <Button group onClick={group} >Add Group</Button>
        </form>

    </>
  )


};
export default GroupForm;
