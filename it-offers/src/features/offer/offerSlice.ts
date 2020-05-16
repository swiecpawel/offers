import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import { AppThunk, RootState } from '../../app/store';
import {counterSlice, incrementByAmount} from "../counter/counterSlice";
import {useDispatch} from "react-redux";

export interface OffersType {
    offers : Array<OfferType>
}

export interface OfferType {
    id: String,
    shortName: String,
    companyWebsite: String,
    companyType: String,
    companySize: Number,
    companyIndustry: String,
    experienceLevel: String,
    title: String,
    employmentType: String,
    salaryFrom: Number,
    salaryTo: Number,
    currency: String,
    technology: {
        tech: String,
        level: Number
    },
    jobDescription : String,
}

const initialState: OffersType= {
    offers: [],
};


export const fetchAllOffers = createAsyncThunk<OfferType[]>(
    'offers/fetchAllOffers',
    async (thunkAPI) => {
        const {data}  = await axios.get('http://localhost:5000/api/offers/')
        return data
    }
);

export const offersSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
    getOffers: (state,action : PayloadAction<OfferType[]>) => {
            state.offers = action.payload;
        },
    extraReducers: {

        [fetchAllOffers.fulfilled]: (state, action:PayloadActionL<OfferType[]>)

        }
    }
});



interface ThunkAPIType {
    dispatch: Function
    getState: Function
    extra?: any
    requestId: string
    signal: AbortSignal
}




export const { getOffers } = offersSlice.actions;

export default offersSlice.reducer;
