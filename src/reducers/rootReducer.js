import { combineReducers } from 'redux';
import leagueReducer from './leagueReducer';

const rootReducer = combineReducers({leagueReducer})

export default rootReducer;