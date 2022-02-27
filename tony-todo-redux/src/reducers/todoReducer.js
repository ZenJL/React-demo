// init state
const initialState = {
  todos: [
    {
      id: 1,
      title: 'react',
      status: 'new'
    }
  ],
  isShowLoading: false
}

// action creator
export function addTodo(data) {
  return {
    type: 'ADD_TODO',
    payload: data
  }
}

// reducer
const reducer = (state = initialState, { type, payload}) => {
  switch(type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    }
    default:
      return state
  }
}

export default reducer;