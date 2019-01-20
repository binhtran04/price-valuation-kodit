import axios from 'axios';
import { GET_VALUATION_DATA } from './types';

export function getValuationData() {
    const request = axios.post('https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data', {'who_rules': 'kodit.io'})
        .then(response => {
            return {
                valuationFeedback: response.data[0],
                valuationList: response.data.slice(1)
            }
        })
    
    return {
        type: GET_VALUATION_DATA,
        payload: request
    }
}