import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import offerReducer from '../features/offer/offerSlice'

const reducer = {
  counter: counterReducer,
  offers: offerReducer,
};

export const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
