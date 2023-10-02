import { configureStore } from '@reduxjs/toolkit';
import { Reducers } from './reducers';
export const Store = configureStore({
  reducer: Reducers
});

export type RootState = ReturnType<typeof Reducers>;
