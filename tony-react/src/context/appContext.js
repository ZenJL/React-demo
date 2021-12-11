import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState({});

  // fectch api users when load page
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
      const data = await res.json();
      setTodos(data.data);
    }
    fetchUsers();
  }, [])

  function getTodoItem(todo) {
    setTodoItem(todo);
  }

  return (
    <AppContext.Provider
      value={{
        todos,
        todoItem,
        getTodoItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext); 