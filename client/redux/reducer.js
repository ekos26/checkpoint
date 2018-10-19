import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

const initialState = {
  campuses: [],
  selectedCampus: {},
  students: []
};

export default (state = initialState, action) => {
  //your code here
  const newState = Object.assign({}, state)
    switch(action.type) {
      case SET_CAMPUSES:
        return Object.assign({}, state, {
          campuses: action.campuses
        })
      case SELECT_CAMPUS:
        return Object.assign({}, state, {
          selectedCampus: action.selectedCampus
        })
      case ADD_CAMPUS:
        newState.campus = state.campuses.concat[action.campus]
          return newState

      default:
        return newState
    }
  return state;
};
