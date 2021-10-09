import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('ADD_CONTACT', (name, number) => {
  return {
    payload: {
      id: `${uuidv4()}`,
      name,
      number,
    },
  };
});

export const deleteContact = createAction('DELETE_CONTACT');

export const filterContact = createAction('FILTER_CONTACT');
