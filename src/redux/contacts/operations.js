import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65b96050b71048505a8ac5c5.mockapi.i';

export const fetchContact = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      console.log(error.message);
      console.log('object');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
