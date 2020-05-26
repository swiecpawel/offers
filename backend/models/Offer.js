const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechSchema = new Schema({tech: { type: String }, level: { type: String}});

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
    city: { type: String, required: true },
    street: { type: String, required: true },
    mainTechnology: { type: String, required: true },
    technology: [{
        tech: String,
        level: Number
    }],
    jobDescription : { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Offer = mongoose.model('offer', OfferSchema);
