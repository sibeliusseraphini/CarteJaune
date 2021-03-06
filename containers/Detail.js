import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Detail from '../components/Detail';
import vaccines from '../selectors/vaccines';
import currentVaccination from '../selectors/currentVaccination';
import switchToListRoute from '../actions/switchToListRoute';

const actions = {
  switchToListRoute,
};

const selectors = {
  currentVaccination,
  vaccines,
};

export default class DetailContainer extends Component {
  render() {
    return <Detail {...this.props} />;
  }
}

export default connect(createStructuredSelector(selectors), actions)(DetailContainer);
