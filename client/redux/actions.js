import axios from 'axios';
import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

// ACTION CREATORS

export const setCampuses = (campuses) => ({
  //your code here
  type: SET_CAMPUSES,
  campuses
});

export const selectCampus = (campus) => ({
  //you code here
  type: SELECT_CAMPUS,
  campus
});

export const addCampus = (campus) => ({
  //your code here
  type: ADD_CAMPUS,
  campus
});

// THUNK CREATORS

export const fetchCampuses = () => {
  return async(dispatch) => {
    try {
      const res = await axios.get('/api/campuses');
      const campuses = res.data;
      const action = setCampuses(campuses);
      dispatch(action)
    } catch(error) {
      console.log(error)
    }
  }
  //your code here
};

export const postCampus = (input) => {
  return async(dispatch) => {
    try {
      const res = await axios.post('/api/campuses', input);
      const newCampus = res.data;
      const action = addCampus(newCampus);
      dispatch(action)
    } catch(err) {
      console.error(err)
    }
  }
  //your code here
};
