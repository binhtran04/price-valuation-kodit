import { GET_VALUATION_DATA } from '../actions/types';

export default function valuation(state = {}, action) {
    switch (action.type) {
        case GET_VALUATION_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}