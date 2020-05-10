import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducerer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducerer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
