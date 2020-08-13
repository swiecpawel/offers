import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState {
  user: UserType;
}
export interface UserType {
  _id?: String;
  name: String;
  email: String;
  password?: String;
  msg?: String;
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
};

export const createNewUser = createAsyncThunk(
  "user/createNewUser",
  // Declare the type your function argument here:

  async (userObject: UserType) => {
    const response = await axios.post(
      "http://localhost:5000/api/users/",
      userObject
    );

    localStorage.setItem("token", response.data.token);
    return await response.data.user;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createNewUser.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      }
    );
  },
});
/*export const selectOffers = (state: RootState) => state.user.offers;*/
export default userSlice.reducer;
