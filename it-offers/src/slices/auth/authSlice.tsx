import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export interface StateAuthType {
    auth : AuthUserType
}


export interface AutType {
    email: String,
    password: String
}
interface AuthUserType {
    id: String
    name: String,
    email: String
};

const initialState: StateAuthType= {
    auth: {
        id: '',
        name: '',
        email: '',
    },
};

export const authUser = createAsyncThunk(
    'auth/logIn',
    // Declare the type your function argument here:

    async (userObject: AutType) => {

        const response = await axios.post('http://localhost:5000/api/auth/', userObject);
        console.log(response.data.name); console.log(response.data.email);
        const resUser = {
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
        };
        return resUser as AuthUserType;


    }
);


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(authUser.fulfilled, (state, action: PayloadAction<AuthUserType>)=>{
            state.auth = action.payload
        })
    }
});
//export const selectOffers = (state: RootState) => state.auth.auth;
export default authSlice.reducer;
