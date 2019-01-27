import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import valuation from './valuation';

const rootReducer = combineReducers({
    valuation,
    form: formReducer
});

export default rootReducer;