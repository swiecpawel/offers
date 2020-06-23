import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import {LatLngTuple} from "leaflet";

export interface OffersType {
  offers: Array<OfferType>;
}

export interface OfferType {
  _id: String;
  coordinates: LatLngTuple;
  shortName: String;
  companyWebsite: String;
  companyType: String;
  companySize: Number;
  companyIndustry: String;
  experienceLevel: String;
  title: String;
  employmentType: String;
  salaryFrom: Number;
  salaryTo: Number;
  currency: String;
  city: String;
  street: String;
  mainTechnology: String;
  technology: [
    {
      tech: String;
      level: Number;
    }
  ];
  jobDescription: String;
  date: String;
}

const initialState: OffersType = {
  offers: [],
};

export const fetchAllOffers = createAsyncThunk(
  "offers/fetchAllOffers",
  // Declare the type your function argument here:
  async () => {
    const response = await axios.get("http://localhost:5000/api/offers/");
    return (await response.data) as OfferType[];
  }
);
export const fetchOffersByTech = createAsyncThunk(
  "offers/fetchByTech",
  // Declare the type your function argument here:
  async (tech: string) => {
    if (tech !== "all") {
      const response = await axios.get(
        "http://localhost:5000/api/offers/tech/" + tech
      );
      return (await response.data) as OfferType[];
    } else {
      const response = await axios.get("http://localhost:5000/api/offers/");
      return (await response.data) as OfferType[];
    }
  }
);

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllOffers.fulfilled,
      (state, action: PayloadAction<OfferType[]>) => {
        state.offers = action.payload;
      }
    );
    builder.addCase(
      fetchOffersByTech.fulfilled,
      (state, action: PayloadAction<OfferType[]>) => {
        state.offers = action.payload;
      }
    );
  },
});
export const selectOffers = (state: RootState) => state.offers.offers;
export default offersSlice.reducer;
