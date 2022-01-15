
import { useEffect, useState, useRef } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './App.css';


import Button from './components/Button';
import ComposeComponent from './sampleApp/ComposeComponent';
import State from './components/State';
import HandleEvent from './components/HandleEvent';
import ConditionalRendering from './components/ConditionalRendering';
import GuestGreeting from './sampleApp/GuestGreeting';
import Forms from './components/Forms';
import Product from './components/useReducer/Product';
import Memo from './components/memo/Memo';

import Home from './components/home/Home';
import About from './components/about/About';

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

  // useRef
  const storeRef = useRef(null);
  function handleChangeInputStore(e) {
    const { value } = e.target;
    // setStore(value);
    storeRef.current = value;
  }

  function handleSubmitUseRef() {
    console.log('store: ', storeRef.current)
  }

  function handleFocusInputRef() {
    storeRef.current.select();
    console.log('stor: ', storeRef.current)
  }

  return (
    <div className="App">
      <ul className='list'>
        <li>
          <Link to="/">
            Todo
          </Link>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Home</Link></li>
      </ul>
      
      {/* <Route exact path="/" component={TodoList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/about/:id" component={Home} />
      <Route exact path="/home" component={Home} /> */}

      {/* <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:id" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch> */}

      <Switch>
        <Route path="/about/:id" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/" component={TodoList} />
      </Switch>


      {/* <Redirect to="/home" />  */}



      <br />

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

      <br />
      ------------------------------------
      <h1>useRef</h1>
      <input ref={storeRef} defaultValue="lorem abc" type="text" onChange={handleChangeInputStore} />
      <button type='button' onClick={handleSubmitUseRef}>submit</button>
      <button type='button' onClick={handleFocusInputRef}>submit focus</button>


      <br />
      ------------------------------------
      <h1>memo</h1>
      <Memo />

      {/* <MovieProvider>
       <MovieFilm />
      </MovieProvider> */}
    </div>
  );
}

export default App;


// component App -> render first => count: 0 -> update state -> component A re-render -> count: next state

// Todo => fetch todo => click view detail => link todo/1 => Todo detail