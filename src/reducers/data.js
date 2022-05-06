import {
  ADD_FAVORITES,
  ON_INPUT_CHANGE,
  REMOVE_FAVORITES,
  SET_DATA, 
  SET_POSTS
  } from 'src/actions/data';

export const initialState = {
    data: [],
    posts: [],
    favorites: [],
    inputValue: ""
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
        };
      case ADD_FAVORITES:
        return {
          ...state,
          favorites: [...state.favorites, action.value]
        };   
        case REMOVE_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter(favorite => favorite !==action.value)
        }
        case ON_INPUT_CHANGE:
        return {
          ...state,
          inputValue: action.value
        }
      default:
        return state;
    }
  };
  
  export default reducer;
