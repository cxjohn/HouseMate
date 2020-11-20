// import React from 'react'

function Message (props) {
  // props.text = msg
  const { text1, text2, sean } = props
  // const text1 = props.text1
  // const text2 = props.text2
  // console.log(sean);

  return(
    <div>

      <h1>
        {text1}
      </h1>
      {/* <h2>
        {text2}
      </h2> */}
      <button onClick={sean} >Change Message</button>

    </div>
  )

};

export default Message;