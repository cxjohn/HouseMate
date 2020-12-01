import './Status.scss';
import { Button, Header, Icon, Message, Modal } from 'semantic-ui-react'
import { useState } from 'react';

function Status (props) {

  // const open = props.visible;
  const [open, setOpen] = useState(props.popup ? true : false)
  // const [open, setOpen] = useState(true)
  
  // props.modal && setOpen(false)


  setTimeout(() => {
    setOpen(false)
  }, 3509);

  function status() {
    if (open) {
      return <p>{props.message}</p>
    }
  }

  return (
    open && <div className='popup'>{ status() }</div>
    )
  }

export default Status;