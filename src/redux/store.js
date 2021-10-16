import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/contacts-reducers';

export const store = configureStore({
  reducer: {
    phonebook: rootReducer,
  },
});
