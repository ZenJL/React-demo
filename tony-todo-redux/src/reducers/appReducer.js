// init state
const initialState = {
  theme: 'light',
  direction: 'left'
}

// reducer
const reducer = (state = initialState, { type, payload}) => {
  switch(type) { 
    case 'SET_THEME': {
      return {
        ...state,
        theme: payload
      }
    }
    default:
      return state
  }
}

export default reducer;