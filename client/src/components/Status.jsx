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
  }, 8000);

  function status() {
    if (open) {
      return <p><b>Split Successful</b></p>
    }
  }

  return (
    open && <div className='popup'>{ status() }</div>

    // <Modal
    //   id="modal_test"
    //   className="status"
    //   basic
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
    //   open={open}
    //   size='small'
    //   // trigger={props.visible}
    // >
    //   {/* <Header icon>
    //     <Icon name='archive' />
    //     Archive Old Messages
    //   </Header> */}
    //   <Modal.Content>
    //     <p>
    //       {props.message} You are eligible for a. Sign up now!
    //     </p>
    //   </Modal.Content>

    // </Modal>

    )
  }

export default Status;


// import React from 'react'
// import { Message } from 'semantic-ui-react'

// const MessageExamplePositive = () => (
//   <Message positive>
//     <Message.Header>You are eligible for a reward</Message.Header>
//     <p>
//       Go to your <b>special offers</b> page to see now.
//     </p>
//   </Message>
// )

// export default MessageExamplePositive

// import { Button, Header, Icon, Modal } from 'semantic-ui-react'

// function ModalExampleBasic() {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <Modal
//       basic
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       size='small'
//       trigger={<Button>Basic Modal</Button>}
//     >
//       <Header icon>
//         <Icon name='archive' />
//         Archive Old Messages
//       </Header>
//       <Modal.Content>
//         <p>
//           Your inbox is getting full, would you like us to enable automatic
//           archiving of old messages?
//         </p>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button basic color='red' inverted onClick={() => setOpen(false)}>
//           <Icon name='remove' /> No
//         </Button>
//         <Button color='green' inverted onClick={() => setOpen(false)}>
//           <Icon name='checkmark' /> Yes
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   )
// }

// export default ModalExampleBasic