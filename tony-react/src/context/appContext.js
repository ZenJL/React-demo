import { createContext, useContext, useEffect, useReducer } from 'react';

import { initialState, reducers, fetchTodo, setTodo } from './appReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [{ todos, todoItem }, dispatch] = useReducer(reducers, initialState);

  // fectch api users when load page
  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
      const data = await res.json();
      dispatch(fetchTodo(data.data));
    }
    fetchTodos();
  }, [])

  function getTodoItem(todoItem) {
    dispatch(setTodo(todoItem))
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