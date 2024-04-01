import { createAsyncThunk,   } from "@reduxjs/toolkit";
import axios from "axios";



axios.defaults.baseURL = 'https://66072ba7be53febb857f43af.mockapi.io';

// export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
//     try {
//           const response = await axios.get('/contacts');
//     return response.data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             // Handle Axios errors
//             return thunkAPI.rejectWithValue(error.response.data);
//         } else {
//             // Handle other errors
//             return thunkAPI.rejectWithValue({ message: error.message });
//         }
//     }
// });
export const fetchAll = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
   // console.log(fetchContacts);
    try {
        const response = await axios.get('/contacts');
          //console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    //console.log(deleteContact);
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data;
    } catch (error) {
        // Handle other errors
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async (value) => {
//     console.log(value);
// })



// export const fetchAll = createAsyncThunk(
//   'contacts/fetchAll',
//   async () => {
//     try {
//         const response = await axios.get('/contacts');
//             //    console.log(response.data);
//         return response.data;
  
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );
// export const fetchAll = createAsyncThunk('contacts/fetchAll', async () => {
//     const response = await axios.get('/contacts');
//   //  console.log(response.data);
//     return response.data;
    
// }
// );

// export const fetchAll = createAsyncThunk(
//   'contacts/fetchAll',
//   async () => {
//     try {
//       const response = await axios.get('/contacts');
//     //   console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return isRejectedWithValue(error.message); // Return rejectWithValue for error handling
//     }
//   }
// );



// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );
