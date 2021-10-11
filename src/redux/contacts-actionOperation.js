import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3700/contacts';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get(baseURL);
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contacts = await axios.post(baseURL, {
        name,
        number,
      });
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(baseURL`/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
