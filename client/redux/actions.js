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

export const fetchCampuses = (dispatch) => {
  //your code here
  try {
    const { data } = axios.get('/campuses')
    dispatch({data})

  } catch(err) {
    console.error(err)
  }
};

export const postCampus = () => {
  //your code here
  try {

  } catch(err) {
    console.error(err)
  }
};
