const express = require('express');
const router = express.Router();

const Offer = require('../../models/Offer');

// @rout GET api/items
// @desc Get All Offers
// @access Public
router.get('/', (req, res) => {
    Offer.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @rout Post api/items
// @desc Create A Post
// @access Public
router.post('/', (req, res) => {
    const newOffer = new Offer({
        shortName: req.body.shortName,
        companyWebsite: req.body.companyWebsite,
        companyType: req.body.companyType,
        companySize: req.body.companySize,
        companyIndustry: req.body.companyIndustry,
        experienceLevel: req.body.experienceLevel,
        title: req.body.title,
        employmentType: req.body.employmentType,
        salaryFrom: req.body.salaryFrom,
        salaryTo: req.body.salaryTo,
        currency: req.body.currency,
        technology: {
            tech: req.body.technology.tech,
            level: req.body.technology.level,
        },
        jobDescription : req.body.jobDescription,
    });

    newOffer.save().then(offer => res.json(offer));
});

// @rout DELETE api/items/:id
// @desc Delete An Offer
// @access Public
router.delete('/:id', (req, res) => {
    Offer.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;