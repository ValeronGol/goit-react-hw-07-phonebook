import { combineReducers } from 'redux';
import { addContact, deleteContact, filterContact } from 'redux/actions';
import { createReducer } from '@reduxjs/toolkit';

const reducerContacts = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: filterReducer,
});
