import './Status.scss';
import { useState } from 'react';
import classnames from 'classnames';


function Status (props) {

  const [open, setOpen] = useState(props.popup ? true : false)
  const [error, setError] = useState(props.error ? true : false)

  const statusClass = classnames(
    'popup',
    { 
      'popup_red': error
    }
  )

  setTimeout(() => {
    setOpen(false)
  }, 3509);

  function status() {
    if (open) {
      return <p>{props.message}</p>
    }
  }

  return (
    open && <div className={statusClass}>{ status() }</div>
    )
  }

export default Status;
