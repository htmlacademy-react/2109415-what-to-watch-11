import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { updateStore } from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer:updateStore,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
