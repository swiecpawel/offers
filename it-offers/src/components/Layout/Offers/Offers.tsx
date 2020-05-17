import React, {useEffect, useState} from "react";
import { OffersType, OfferType } from '../../../features/offer/offerSlice'
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllOffers} from '../../../features/offer/offerSlice'
import {selectCount} from "../../../features/counter/counterSlice";
import {store} from "../../../app/store";

const offersArray : OffersType ={
    offers : [{   id: "6565656",
        shortName: "shortName",
        companyWebsite: "www.comp1.com",
        companyType: "inf",
        companySize: 79,
        companyIndustry: "SoftHouse",
        experienceLevel: "4",
        title: "dev",
        employmentType: "dev",
        salaryFrom: 6,
        salaryTo: 2000,
        currency: "PLN",
        technology: {
            tech: "html",
            level: 6
        },
        jobDescription : "You will be responsible...",
    },

        {   id: "58585",
            shortName: "shortName",
            companyWebsite: "www.comp1.com",
            companyType: "inf",
            companySize: 79,
            companyIndustry: "SoftHouse",
            experienceLevel: "4",
            title: "dev",
            employmentType: "dev",
            salaryFrom: 6,
            salaryTo: 2000,
            currency: "PLN",
            technology: {
                tech: "html",
                level: 6
            },
            jobDescription : "You will be responsible...",
        },
    ]
};
/*const dispatch = useDispatch();
const fetchOffers = () => {

    axios.get('http://localhost:5000/api/offers/')
        .then(response => {
            //console.log(response.data.products);
           dispatch(getOffers(response.data.products))
        });

};*/


const Offers = () => {

    const [offers, newOffers] = useState([] as OfferType[]);
    const dispatch = useDispatch();
    useEffect(() => {
  try {
  dispatch(fetchAllOffers())
  }
  catch (e) {
      console.log(e)
  }
}, []);

    return (
                <div>
                    <button> Empty Button </button>
                </div>

/*        <main className={style.Content}>
            {
                offersArray.offers.map((offer, index) => {
                    return <Offer language={`${offer.technology.tech}`}>Offer id: {offer.id}</Offer>
                })
            }

        </main>*/
    );
};


export default Offers;