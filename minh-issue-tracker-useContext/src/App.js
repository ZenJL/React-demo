
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAdd from './components/FormAdd';

import {Button } from 'reactstrap';
import IssueList from './components/IssueList';
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from "uuid";

// context
import { useIssueContext } from './context/issueContext';


function App() {
  const { issues, addIssue, deleteIssue } = useIssueContext();

  const [todos, setTodos] = useState([]);

  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');

  const [form, setForm] = useState(
    {
      id: "",
      title: "Learn React",
      author: "Tony Nguyen",
      description: "",
      severity: "low",
      status: "new"
    }
);

  useEffect(() => {
    // console.log('helloeqwe useEe');

    async function getTodos() {
      try {
        const res = await axios.get('https://tony-json-server.herokuapp.com/api/todos');
        setTodos(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getTodos();
  }, [])

  const handleAddIssue = async (newIssue) => {
    try {
      const res = await axios.post('https://tony-json-server.herokuapp.com/api/todos', newIssue);
      const data = res.data.data;
      addIssue(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteIssue = async (issueId) => {
    try {
      await axios.delete(`https://tony-json-server.herokuapp.com/api/todos/${issueId}`);
      deleteIssue(issueId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div 
        className="container">
        <Button
          className='btn-logout'
          color='info'
        >
          Log out</Button>

        <h2 className='head-title'>ISSUES TRACKER</h2>
        <FormAdd
          addIssue={handleAddIssue}
          form={form}
          setForm={setForm}
          description={description}
          setDescription={setDescription}
          severity={severity}
          setSeverity={setSeverity}
        />

        <hr/>

        <IssueList todos={issues} deleteIssue={handleDeleteIssue}/>
      </div>
    </div>
  );
}

export default App;
