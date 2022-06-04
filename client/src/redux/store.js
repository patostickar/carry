import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchBar from './searchBar';
import carsResults from './carsResults';
import testimonials from './testimonials';
import booking from './booking';
import user from "./user"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  searchBar,
  carsResults,
  booking,
  testimonials,
  user
});

// const store = configureStore({
//   reducer: rootReducer,
// });

// export { store };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
