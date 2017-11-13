import { FETCH_LEAGUE } from '../constants';

const actions = {
    fetchLeague: () => ({
        type: FETCH_LEAGUE,
        payload: 'League'
    })
};

export default actions;