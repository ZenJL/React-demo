import React, { useState } from 'react'

function State() {
  // primitive value: string, boolean, number ... 
  const [firstName, setFirstName] = useState('truong');
  const [lastName] = useState('tony');
  // reference value: array, object
  const [messageObj, setMessageObj] = useState({ // memory A
    message: '',
    id: 1,
    author: {
      name: '',
      gender: ''
    }
  })

  console.log('messageObj: ', messageObj)

  return (
    <div>
      FirstName: {firstName} <br />
      LastName: {lastName}
      <button type="button" onClick={() => setFirstName('truong')}>change first name</button>

      <br />
      --------------------
      <h3>State: updating object</h3>
      <input 
        type="text"
        value={messageObj.author.name}
        onChange={event => {
          // change mutable object
          // messageObj.message = event.target.value; // memory A
          // setMessageObj(messageObj) // doesn't re-render

          // immutable object
          // const newMessage = { message: event.target.value }; // memory B
          // const newMessage = { ...messageObj } // copy shallow -> memory B
          // newMessage.message = event.target.value 
          // setMessageObj(newMessage);

          // callback function
          // setMessageObj(prevState => {
          //   return {
          //     ...prevState,
          //     message: event.target.value
          //   }
          // })

          // update nested object
          // wrong
          // setMessageObj(prevState => {
          //   return {
          //     ...prevState,
          //     name: event.target.value
          //   }
          // })

          // wrong
          // setMessageObj(prevState => {
          //   return {
          //     ...prevState.author,
          //     name: event.target.value
          //   }
          // })

          // wrong
          // setMessageObj(prevState => {
          //   return {
          //     ...prevState,
          //     author: {
          //       name: event.target.value
          //     }
          //   }
          // })

          // correct
          setMessageObj(prevState => {
            return {
              ...prevState, // copy shallow
              author: {
                ...prevState.author, // copy shallow author
                name: event.target.value
              }
            }
          })
        }}
      />

      <input 
        type="text"
        value={messageObj.author.gender}
        onChange={event => {
          // correct
          setMessageObj(prevState => {
            return {
              ...prevState, // copy shallow
              author: {
                ...prevState.author, // copy shallow author
                gender: event.target.value
              }
            }
          })
        }}
      />

    </div>
  )
}

export default State;
