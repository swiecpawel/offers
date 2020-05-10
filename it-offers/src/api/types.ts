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