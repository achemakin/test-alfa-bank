import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { animalsApi } from '../services/animals';

export const store = configureStore({
  reducer: {
    [animalsApi.reducerPath]: animalsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalsApi.middleware),
})

console.log(store.getState());

setupListeners(store.dispatch);