// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import ComposeComponent from './sampleApp/ComposeComponent';
import State from './components/State';
import ReactBoxes from './sampleApp/ReactBoxes';
import HandleEvent from './components/HandleEvent';

function App() {
  const [count, setCount] = useState(0);    // đây là local state của App
  // muốn lưu lại giá trị để khi refresh trang vẫn xài tiếp thì lưu vào local storage
  console.log('count: ', count);

  function handleIncrement() {
    setCount(prevState => {
      console.log('prevState: ', prevState);
      return prevState + 1
    });
    //// ============ function setCount dong tren = 1 dong duoi; NHUNG thuong viet cách trên, đảm bảo lấy state trc đó
    // setCount(count + 1);
    // setCount(0);
  };



  const isNewbie = false;   // biến bt, ko đc quản lý bởi react
  // const isNewbie = true;

  // expression
  // const element_1 = <h1>I Love JSX! {5 + 5}</h1>;
  // // large block of HTML
  // const element_2 = (
  //   <ul>
  //     <li>Apples</li>
  //     <li>Bananas</li>
  //     <li>Cherries</li>
  //   </ul>
  // );
  // // one top level element
  // const element_3 = (
  //   <div>
  //     <h1>I am a Header.</h1>
  //     <h1>I am a Header too.</h1>
  //   </div>
  // );
  // // element must be closed
  // const element_4 = <input type="text" />;

  return (
    <div className="App">
      <h1>Expression in JSX</h1>
      <div>{1+2}</div>
      <div>{1 > 2 ? "true" : "false..."}</div>
      <div>{isNewbie === true ? "this is react" : null}</div>
      <div>{isNewbie && "this is react &&"}</div>
      <div>{isNewbie || "this is react ||"}</div>
      <input type="text" />
      {/* if div doesn't have content in it, can write like this */} <div />
      {/* e.g. for the one above, and find out how to write css in jsx*/}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>  
        <div>{isNewbie ? 1 : null}</div>
        <div>2</div>
      </div>
      <hr/>
      {/* {element_1}
      {element_2}
      {element_3}
      {element_4} */}


      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TodoList />
      {/* this is demo tony */}
      <h1>Component React</h1>
      <div>Click count times: {count}</div>
      <Button type="button" text="submit" />
      <Button type="submit" text="add" onClick={handleIncrement} />
      
      <hr/>

      <h1>Sample App</h1>
      <h2>Compose Component</h2>
      <div>thing u need right here</div>
      <ComposeComponent />
      <hr/>
      <h2>This is State demo</h2>
      <State />
      <hr/>

      <h1>Handle Event</h1>
      <HandleEvent />

      <hr/>
      <h2>React Boxes</h2>
      <ReactBoxes />

    </div>
  );
}

function TodoList() {
  return(
    <ul>
      <li>tony 1</li>
      <li>tony 2</li>
    </ul>
  )
};


export default App;


// component App -> first render => count = 0; -> update state -> component A re-render -> count: next state;