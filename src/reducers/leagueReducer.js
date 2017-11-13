import { FETCH_LEAGUE } from '../constants';

const initialState = {};

export default function leagueReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LEAGUE:
            return {
                ...state,
                league: action.payload
            }
        default:
            return state;
    }
}