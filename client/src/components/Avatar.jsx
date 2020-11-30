import { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import './Avatar.scss';
import classnames from 'classnames';

function Avatar (props) {

  const [open, setOpen] = useState(false)
  // const [selected, setSelected] = useState(false)

  // const updateImage = classnames(
  //   "image_update",
  //   { 
  //     'image_selected': selected,
  //   }
  // )

  const update = () => {
    console.log("update clicked");

    const updateImage = document.getElementsByClassName("image_selected")[0].src
    setOpen(false);

    const truncate = updateImage.indexOf("images")

    console.log("update image source: ", updateImage);
    console.log("update image source truncated: ", updateImage.substring(truncate));
    
    const imageData = {
      user_id: props.user.id,
      first_name: null,
      last_name: null,
      email: null,
      profile_pic: updateImage.substring(truncate)
    }
    
    return props.onUpdate(imageData)

  }


  // getSiblings provided by https://gomakethings.com/an-es6-way-to-get-all-sibling-elements-with-vanilla-js/
  const getSiblings = (elem) => {
    return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
      return sibling !== elem;
    });
  };
  
  const select = (event) => {

    const selected = event.target;

    const siblings = getSiblings(selected);

    siblings.forEach((sibling) => {sibling.classList.remove("image_selected")});

    selected.classList.add("image_selected");
    // setSelected(true)

  }


  return(
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      // trigger={<Button>Basic Modal</Button>}
      
      trigger={<i id="camera_icon" className="fa fa-camera form_icon"></i>}
      // trigger={<Icon id="camera_icon" name='camera retro' />}


    >
      <Header icon>
         Select your profile picture
      </Header>
      <Modal.Content className='content_pics'>
        <img 
          className="image_update"
          src="images/logo192.png"
          width={75}
          onClick={event => select(event)}
        />
        <img
          className="image_update"
          src="images/housematelogo.png"
          width={75}
          onClick={event => select(event)}
        />
        <img
          className="image_update"
          src="images/housematewhite.png"
          width={75}
          onClick={event => select(event)}
        />
        <img
          className="image_update"
          src="images/housematewhite.png"
          width={75}
          onClick={event => select(event)}
        />
        <img
          className="image_update"
          src="images/housematelogo.png"
          width={75}
          onClick={event => select(event)}
        />
        <img
          className="image_update"
          src="images/logo192.png"
          width={75}
          onClick={event => select(event)}
        />
        <img 
          className="image_update" 
          src="images/housematewhite.png" 
          width={75}
          onClick={event => select(event)}
        />
        <img 
          className="image_update" 
          src="images/housematelogo.png" 
          width={75}
          onClick={event => select(event)}
        />
        <img 
          className="image_update" 
          src="images/logo192.png" 
          width={75}
          onClick={event => select(event)}
        />
        <img 
          className="image_update" 
          src="images/housematelogo.png"
          width={75}
          onClick={event => select(event)}
        />
        <img 
          className="image_update" 
          src="images/logo192.png" 
          width={75}
          onClick={event => select(event)}
        />
        <img
          className="image_update" 
          src="images/housematewhite.png" 
          width={75}
          onClick={event => select(event)}
        />
        
      </Modal.Content>
       <Modal.Actions>
         <Button color='red' inverted onClick={() => setOpen(false)}>
           <Icon name='remove' /> Cancel
         </Button>
         <Button color='green' inverted onClick={update}>
           <Icon name='checkmark' /> Update
         </Button>
       </Modal.Actions>
    </Modal>
  )

};

export default Avatar;

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