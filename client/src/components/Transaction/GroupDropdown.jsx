import { useState } from 'react';
import Button from '../Button';
// import './GroupDowndown.scss';
import { Dropdown } from 'semantic-ui-react';


function GroupDropdown(props) {
  
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
      user_id: props.user.id,
      is_expense: true
    }
    console.log('vegan', splitData);

    return props.onSplit(splitData);
  };

  const dropdown = () => {
    console.log('dropdown');
    return props.onClick();
  };
  
  return (
    <>
      
      <Button update onClick={dropdown} >Groups</Button>
      {/* <Button split onClick={dropdown} >Friends</Button> */}
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
        <Button split onClick={split} >Splitzies</Button>
      </form>

    </>
  )


};
export default GroupDropdown;









//---------------------------------------------------------------------------------

// import { useState } from 'react';
// import Button from '../Button';
// import './TransactionForm.scss';
// import { Dropdown } from 'semantic-ui-react';


// function TransactionForm(props) {
  
//   // add fake group data 
//   // group_name && members in the group


//   const friends = []
//   props.friends_list.map((friend) => {

//     const friend_object = {
//       key: friend[0],
//       text: `${friend[1]} ${friend[2]}`,
//       value: friend[0]
//     };
//     friends.push(friend_object)
//   })

//   const [formState, setFormState] = useState({
//     description: props.description || "",
//     amount: props.amount || "",
//   })

//   function split() {
//     const values = document.getElementsByClassName('ui label');
//     console.log("splitzies")
//     // console.log("value array:", values)
//     const users = [props.user.id];
//     for (const value of values) {
//       // console.log("name: ", value.innerText)
//       // console.log("id: ", value.attributes.value.value)
//       // console.log("desc ", formState.description)
//       // console.log("amount ", formState.amount)
//       users.push(Number(value.attributes.value.value))
//     }

//     const splitData = {
//       users,
//       description: formState.description,
//       amount_owed: Math.round((formState.amount / users.length) * 10000) / 10000,
//       amount: formState.amount,
//       user_id: props.user.id,
//       is_expense: true
//     }
//     console.log('vegan', splitData)

//     return props.onSplit(splitData)
//   }

//   return (
//     <>
//       <span className="test form"></span>
//       <form onSubmit={event => event.target.preventDefault} className="form_transaction">
//         <Dropdown className="dropdown" placeholder='Mates' fluid multiple selection options={friends} />

//         <span className="input"></span>
//         <input
//           className='description'
//           placeholder='Description'
//           value={formState.description}
//           onChange={event => setFormState({ ...formState, description: event.target.value })}
//           required
//           autoFocus
//           autoComplete="off"
//         />
//         <span className="input"></span>
//         <input
//           className='amount'
//           type='number'
//           min='0'
//           step='any'
//           placeholder='$0.00'
//           value={formState.amount}
//           onChange={event => setFormState({ ...formState, amount: event.target.value })}
//           required
//           autoComplete="off"
//         />
//         <Button split onClick={split} >Splitzies</Button>
//       </form>

//     </>
//   )


// };
// export default TransactionForm;

