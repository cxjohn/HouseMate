import { useState } from 'react'
import classnames from 'classnames';
import './Friend.scss';
import Button from './Button'


function Friend(props) {

  const [formState, setFormState] = useState({
    email: props.email || ""
    // password: "",
  })

  function friend() {
    console.log(formState.email)
    const friendData = {
      friends_list: formState.email,
      user_id: props.user.id
    }
    return props.onFriend(friendData)
  }


  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <Button className='back-arrow' back onClick={(event) => props.displayForm(event)}>Back</Button>
        <input
          className='email'
          type='email'
          placeholder='Enter Friends Email...'
          value={formState.email}
          onChange={event => setFormState({ ...formState, email: event.target.value })}
          autoFocus
          required
        />
        <Button friend onClick={friend}>Add Friend</Button>
      </form>
    </div>
  )
};

export default Friend;