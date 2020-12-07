import { useState } from 'react';
import Button from '../Button';
import FriendDropdown from './FriendDropdown';
import './TransactionForm.scss';
import { Dropdown } from 'semantic-ui-react';
import './GroupDropdown.scss'


function TransactionForm(props) {
  
  // add fake group data 
  // group_name && members in the group


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
    description: props.description || "",
    amount: props.amount || "",
  })

  function split() {
    const values = document.getElementsByClassName('ui label');
    console.log("splitzies")
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
      is_expense: true
    }
    console.log('vegan', splitData);

    return props.onSplit(splitData);
  };

  const dropdown = () => {
    console.log('dropdown');
  };
  
  return (
    <>
      <section onClick={dropdown}>
      <Button update  >Groups</Button>
      </section>
      <span className="test form"></span>

    </>
  )
};
export default TransactionForm;











