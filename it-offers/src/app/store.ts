import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import offerReducer from "../slices/offer/offerSlice";
import userReducer from "../slices/user/userSlice";
import authReducer from "../slices/auth/authSlice";
import oneOfferReducer from "../slices/oneOfferSlice/oneOfferSlice"

const reducer = {
  offers: offerReducer,
  user: userReducer,
  auth: authReducer,
  offer: oneOfferReducer
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
