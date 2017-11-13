import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import '../assets/scss/App.scss';

class App extends Component {

    componentDidMount() {
        this.setLeague();
    }

    setLeague() {
        this.props.actions.fetchLeague();
    }

    render() {
        return (
            <div className="vigor-home">
                <div className="row justify-content-center" >
                    <div className="col-8 col-lg-4 header text-center" >
                        <div className="header-title" >VIGOR</div>
                        <div className="header-logo" >
                            <img className="logo" src="http://image.ibb.co/kmYmdG/Vigor.png" alt="Vigor" />
                        </div>
                    </div>
                </div>
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