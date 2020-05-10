import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface Offers {
    offers: Array<Offer>,
}

export interface Offer {
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

const initialState: Offers = {
    offers: [],
};


