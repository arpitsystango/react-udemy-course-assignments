import * as actionType from '../actions';

const initialState = {
  persons: []
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PERSON_ADDED:
      return {
        persons: state.persons.concat({
          id: Math.random(),
          name: action.name,
          age: action.age
        })
      };

    case actionType.PERSON_DELETED:
      return {
        persons: state.persons.filter(
          person => person.id !== action.id
        )
      };

    default:
      break;
  }

  return state;
};

export default personsReducer;