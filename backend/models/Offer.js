const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
    shortName: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    companyType: { type: String, required: true },
    companySize: { type: Number, required: true },
    companyIndustry: { type: String, required: true },
    experienceLevel: { type: String, required: true },
    title: { type: String, required: true },
    employmentType: { type: String, required: true },
    salaryFrom: { type: Number, required: true },
    salaryTo: { type: Number, required: true },
    currency: { type: String, required: true },
    technology: {
        tech: { type: String, required: true },
        level: { type: Number, min: 1, max: 5 }
    },
    jobDescription : { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Offer = mongoose.model('offer', OfferSchema);
