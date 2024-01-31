import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact } from './operations';

const slice = createSlice({
  name: 'contacts',
  initialState: [],

  extraReducers: builder => {
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload.id);
      })
      .addMatcher(
        isAnyOf(
          fetchContact.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => console.log(action.payload)
      );
  },

  selectors: {
    selectContacts: state => state,
  },
});

export const contactsReducer = slice.reducer;
export const { selectContacts } = slice.selectors;
