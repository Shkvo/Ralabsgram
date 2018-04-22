import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeftSideBar from './LeftSideBar';
import MediaDetails from './MediaDetails';
import '../css/App.css';
import Feed from './Feed';
import PageNotFound from './404';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <LeftSideBar {...this.props} />
        <Switch>
          <Route exact path="/" component={() => <Feed {...this.props} />} />
          <Route
            path="/media/:id"
            component={() => <MediaDetails {...this.props} />}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.user.access_token,
});

App.propTypes = {
  accessToken: PropTypes.string,
};

App.defaultProps = {
  accessToken: '',
};

export default withRouter(connect(mapStateToProps)(App));
