// import { createStoreHook,  } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
  preloadedState: {
    count: 1
  }
});
console.log(store.getState())

export default store;