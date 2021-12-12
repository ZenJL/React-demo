
import { useEffect, useState } from 'react';

import './App.css';


import Button from './components/Button';
import ComposeComponent from './sampleApp/ComposeComponent';
import State from './components/State';
import HandleEvent from './components/HandleEvent';
import ConditionalRendering from './components/ConditionalRendering';
import GuestGreeting from './sampleApp/GuestGreeting';
import Forms from './components/Forms';
import Product from './components/useReducer/Product';

function TodoList() {
  return (
    <ul>
      <li>tony 1</li>
      <li>tony 2</li>
    </ul>
  )
}

function App() {
  const [count, setCount] = useState(0); // local state of App
  const [users, setUsers] = useState([]);
  const isNewbie = true;

  function handleIncrement() {
    // setCount(prevState => {
    //   console.log('prevState: ', prevState);
    //   return prevState + 1
    // })
    // setCount(0);
    setCount(count + 1)
  }

  console.log('app component: ')

  useEffect(() => {
    console.log('useEffect: ')
  }, []) // only run once time

  useEffect(() => {
    console.log('useEffect count change: ', count)
  }, [isNewbie]) // just re-run when count change

  useEffect(() => {
    console.log('useEffect clean up function 1')

    // clearn up function
    return () => {
      console.log('useEffect clean up function 2')
    }
  })

  // fectch api users when load page
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://tony-json-server.herokuapp.com/api/users');
      const data = await res.json();
      setUsers(data.data);
    }
    fetchUsers();
  }, [])
  // render -> useEffect -> update data -> cpn re-render -> useEffect // loop render

  return (
    <div className="App">
      <h1 style={{ fontSize: '40px', color: '#f00' }}>useEffect</h1>
      <b>List Users</b> <br />
      {users.map(user => (
        <div>
          {user.firstName}
        </div>
      ))}
      <h1 style={{ fontSize: '40px', color: '#f00' }}>Expression in JSX</h1>
      <div>
        {1 > 2 ? "not true" : "not false"} <br />
        {1 + 2} <br />
        {isNewbie ? "this is react" : null} <br />
        {isNewbie && "this is react &&"} <br />
        {isNewbie || "this is react ||"} <br />
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div>{isNewbie ? '1' : null}</div>
          <div>2</div>
        </div>
      </div>

      <br />
      <TodoList />

      <br />
      <h1>Component react</h1>
      <div>click count times: {count}</div>

      <Button type="button" text="submit" />
      <Button type="submit" text="add" onClick={handleIncrement} />
      <br />
      ------------------------------------
      <h1>Sample App</h1>
      <h3>Compose Component</h3>
      <ComposeComponent />

      <br />
      ------------------------------------
      <h1>State</h1>
      <State />

      <br />
      ------------------------------------
      <h1>Handle Event react</h1>
      <HandleEvent />

      <br />
      ------------------------------------
      <h1>Conditional Rendering</h1>
      <ConditionalRendering />

      <GuestGreeting />

      <br />
      ------------------------------------
      <h1>Form</h1>
      <Forms />

      <br />
      ------------------------------------
      <h1>useReducer</h1>
      <Product />


      {/* <MovieProvider>
       <MovieFilm />
      </MovieProvider> */}
    </div>
  );
}

export default App;


// component App -> render first => count: 0 -> update state -> component A re-render -> count: next state