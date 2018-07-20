import { combineReducers } from 'redux';
import personsReducer from './reducers/personsReducer';

const rootReducer = combineReducers({
  persons: personsReducer
});

export default rootReducer;
