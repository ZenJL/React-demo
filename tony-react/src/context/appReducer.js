// create constant
export const FETCH_TODO = 'APP/FETCH_TODO';
export const SET_TODO = 'APP/SET_TODO';
export const ADD_TODO = 'APP/ADD_TODO';
// actions types
export function fetchTodo(data) {
  return { 
    type: FETCH_TODO,
    payload: data
  }
}

export function setTodo(todoItem) {
  return { 
    type: SET_TODO,
    payload: todoItem
  }
}

// initial state
export const initialState = {
  todos: [],
  todoItem: {}  
}

// reducers
export function reducers(state = initialState, action) {
  // action -> { type, payload }
  switch(action.type) {
    case FETCH_TODO: {
      return {
        ...state,
        todos: action.payload
      }
    }
    case SET_TODO: {
      return {
        ...state,
        todoItem: action.payload
      }
    }
    default:
      return state;
  }
}