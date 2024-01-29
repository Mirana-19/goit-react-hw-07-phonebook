import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.push(payload);
      },
    },

    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
  selectors: {
    selectContacts: state => state,
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
