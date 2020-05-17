import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {useDispatch} from "react-redux";
import {store} from "../../app/store";


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


/*export const fetchAllOffers = createAsyncThunk<OfferType[]>(
    'offers/fetchAllOffers',
    async (thunkAPI) => {
            const {data} = await axios.get('http://localhost:5000/api/offers/')
            return data
    }
);*/

export const fetchAllOffers = createAsyncThunk(
    'offers/fetchAllOffers',
    // Declare the type your function argument here:
    async (thunkAPI) => {
        const response = await axios.get('http://localhost:5000/api/offers/');
        // Inferred return type: Promise<MyData>
        return (await response.data) as OfferType[]
    }
)




export const offersSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAllOffers.fulfilled, (state, action: PayloadAction<OfferType[]>)=>{
        state.offers = action.payload
    })
}
});

export default offersSlice.reducer;
