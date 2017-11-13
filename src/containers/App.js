import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import LandingPage from '../components/LandingPage';
import '../assets/scss/App.scss';

class App extends Component {

    // TODO: Add image-loader to webpack
    render() {
        return (
            <div className="vigor">
                <LandingPage />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object,
    league: PropTypes.object
};

function mapStateToProps(state) {
    const { league } = state.leagueReducer;
    return { league };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);