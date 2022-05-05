import {
  SET_DATA, SET_POSTS
  } from 'src/actions/data';

export const initialState = {
    data:[],
    posts:[]
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_DATA:
        return {
          ...state,
          data: action.value,
        };
      case SET_POSTS:
        return {
          ...state,
          posts: action.value
        }
      default:
        return state;
    }
  };
  
  export default reducer;
