import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import todoReducer from '../reducers/todoReducer';
import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  app: appReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store;