import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact } from './operations';

const slice = createSlice({
  name: 'contacts',
  initialState: [],

  extraReducers: builder => {
    builder
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.unshift(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return state.filter(contact => contact.id !== payload.id);
      })
      .addMatcher(
        isAnyOf(
          fetchContact.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => console.log(payload)
      );
  },

  selectors: {
    selectContacts: state => state,
  },
});

export const contactsReducer = slice.reducer;
export const { selectContacts } = slice.selectors;
