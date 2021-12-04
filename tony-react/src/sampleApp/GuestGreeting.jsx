import React, { useState } from 'react'

// function Text({ isAuth }) {
//   return (
//     <>
//       {isAuth ? 'welcome to tony' : ' Please sign up.'} <br />
//     </>
//   )
// }

function Text({ text }) {
  return (
    <>
      {text} <br />
    </>
  )
}

function GuestGreeting() {
  // initalState
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      {/* <Text isAuth={isAuth} /> */}
      <Text text={isAuth ? 'welcome' : ' Please sign up.'} />
      <button onClick={() => setIsAuth(prevState => !prevState)}>{isAuth ? 'logout' : 'login'}</button>
    </div>
  )
}

export default GuestGreeting
