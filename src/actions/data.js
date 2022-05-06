export const SET_DATA = 'SET_DATA';

export const setData = (value) => ({
  type: SET_DATA,
  value
});

export const SET_POSTS = 'SET_POSTS';

export const setPosts = (value) => ({
  type: SET_POSTS,
  value
});

export const ADD_FAVORITES = 'ADD_FAVORITES';

export const addFavorites = (value) => ({
  type: 'ADD_FAVORITES',
  value
})

export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const removeFavorites = (value) => ({
  type: 'REMOVE_FAVORITES',
  value
})

export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

export const onInputChange = (value) => ({
  type: 'ON_INPUT_CHANGE',
  value
})