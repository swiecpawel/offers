import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import offerReducer from "../slices/offer/offerSlice";
import userReducer from "../slices/user/userSlice";
import authReducer from "../slices/auth/authSlice";

const reducer = {
  offers: offerReducer,
  user: userReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
