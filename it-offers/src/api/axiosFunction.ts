import axios from 'axios'
import { Offer } from './types';

const baseUrl = 'http://localhost:5000/api/offers/';

interface Response {
    result: Offer[]
}

export async function readOffers(): Promise<Offer[]> {
    const response = await axios.get<Response>(baseUrl + window.location.pathname, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });

    return response.data.result;
}

/*export async function writeOffer(offer: Offer) {
    await axios.post<Offer[]>(baseUrl + window.location.pathname, offer, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }*/
