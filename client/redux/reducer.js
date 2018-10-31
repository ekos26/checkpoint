import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

const initialState = {
  campuses: [],
  selectedCampus: {},
  students: []
};

export default (state = initialState, action) => {
  //your code here
    switch(action.type) {
      case SET_CAMPUSES:
        return {...state, campuses: action.campuses }
      case SELECT_CAMPUS:
        return {...state, selectedCampus: action.campus}
      // case ADD_CAMPUS:
      //   newState.campus = state.campuses.concat[action.campus]
      //     return newState
      default:
        return initialState;
    }
  return state;
};
