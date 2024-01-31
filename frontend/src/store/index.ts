import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'; 

// Define the initial state of your application
const initialState = {};

// Create the Redux store with the root reducer and middleware (in this case, we use Redux Thunk for async actions)
const store = createStore(rootReducer, initialState, applyMiddleware());

export default store;
