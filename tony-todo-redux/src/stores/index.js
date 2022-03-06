import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducer
import todoReducer from '../reducers/todoReducer';
import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  app: appReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;