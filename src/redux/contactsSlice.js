import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAll } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
  // addContact: (state, action) => {
  //    state.items.push(action.payload);
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
       
        state.loading = true;
          // state.error = null;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
         state.loading = false;
         state.items = action.payload;
        
      })
      .addCase(fetchAll.rejected, (state) => {
        state.loading = false;
        state.error = true;
        // state.error = action.error.message;
      })

        .addCase(addContact.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(deleteContact.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
  }
});

export const selectContacts = (state) => state.contacts.items;
// console.log(selectContacts);

export default contactsSlice.reducer;