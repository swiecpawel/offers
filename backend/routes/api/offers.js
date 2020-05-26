const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

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
// @access Private
router.post('/', auth, (req, res) => {


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
        city: req.body.city,
        street: req.body.street,
        mainTechnology: req.body.mainTechnology,
        technology: req.body.technology,
        jobDescription : req.body.jobDescription,
    });

    newOffer.save().then(offer => res.json(offer));
});

// @rout DELETE api/items/:id
// @desc Delete An Offer
// @access Private
router.delete('/:id', auth, (req, res) => {
    Offer.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// @rout GET api/items
// @desc Get Offers by tech
// @access Public
router.get('/tech/:techno', (req, res) => {

    Offer.find({"mainTechnology" : req.params.techno })
        .sort({date: -1})
        .then(items => res.json(items))
});


module.exports = router;