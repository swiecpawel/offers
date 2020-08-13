import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../app/store";
import {OfferType} from "../offer/offerSlice";

export interface OfType extends OfferType {
  isLoading: boolean;
}

interface OfferInit {
  offer: OfType;
}

const initialState: OfferInit = {
  offer: {
    isLoading: true,
    coordinates: [0, 0],
    shortName: "",
    companyWebsite: "",
    companyType: "",
    companySize: "",
    companyIndustry: "",
    experienceLevel: "",
    title: "",
    employmentType: "",
    salaryFrom: "",
    salaryTo: "",
    currency: "",
    city: "",
    street: "",
    mainTechnology: "",
    technology: [
      {
        tech: "",
        level: "",
      },
    ],
    jobDescription: "",
    date: "",
  },
};

export const findById = createAsyncThunk(
  "offer/findById",
  async (id: string) => {
    const response = await axios.get("http://localhost:5000/api/offers/offer/" + id);
    const resObje: OfferType = response.data;
    const responseObject: OfType = {isLoading: false, ...resObje};
    return (responseObject) as OfType;
  }
);

export const clearOffer = createAsyncThunk(
    "offer/clearOffer",
     () => {
      const clcOffer: OfType = initialState.offer;
      return (clcOffer) as OfType;
    }
);

export const oneOfferSlice = createSlice({
  name: "oneOffer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      findById.fulfilled,
      (state, action: PayloadAction<OfType>) => {
        state.offer = action.payload;
      }
    );
    builder.addCase(
        clearOffer.fulfilled,
        (state, action: PayloadAction<OfType>) => {
          state.offer = action.payload;
        }
    );
  },
});
export const selectOffer = (state: RootState) => state.offer.offer;
export default oneOfferSlice.reducer;
