import { configureStore } from '@reduxjs/toolkit'

import reducer from 'src/reducers';

const store = configureStore({
  reducer,
});

export default store;