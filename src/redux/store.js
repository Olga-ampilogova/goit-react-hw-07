import { configureStore } from '@reduxjs/toolkit';
 import contactsReducer from '../redux/contactsSlice';
import filtersReducer from './filtersSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  }
});



//  export const store =  configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer
//   },
// });
// const contactPersistConfig = {
//   key: 'contacts',
//    version: 1,
//   storage,
//   whitelist:['items']
// }
//  const persistedContactReducer = persistReducer(contactPersistConfig, contactsReducer)

//  export const store =  configureStore({
//   reducer: {
//     contacts: persistedContactReducer,
//     filters: filtersReducer
//    },
//     //  middleware: (getDefaultMiddleware) =>
//     // getDefaultMiddleware({
//     //   serializableCheck: {
//     //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST],
//     //   },
//     // }),
// });
//  export const  persistor = persistStore(store)