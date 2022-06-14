import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchBarReducer from './searchBar';
import carsResultsReducer from './carsResults';
import bookingReducer from './booking';
import userReducer from './user';

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
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['searchBar', 'carsResults', 'booking', 'testimonials'],
};

const searchBarPersistConfig = {
  key: 'searchBar',
  version: 1,
  storage: storageSession,
};
const carsResultsPersistConfig = {
  key: 'carsResults',
  version: 1,
  storage: storageSession,
};
const bookingPersistConfig = {
  key: 'booking',
  version: 1,
  storage: storageSession,
};

const rootReducer = combineReducers({
  searchBar: persistReducer(searchBarPersistConfig, searchBarReducer),
  carsResults: persistReducer(carsResultsPersistConfig, carsResultsReducer),
  booking: persistReducer(bookingPersistConfig, bookingReducer),
  user: userReducer,
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
