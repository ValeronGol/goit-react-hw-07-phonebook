import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/contacts-reducer';

export const store = configureStore({
  reducer: {
    phonebook: rootReducer,
  },
});
