import React, { Component } from 'react';
import LeftSideBar from './LeftSideBar';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../css/App.css';
import Feed from './Feed';
import PageNotFound from './404';
import MediaDetails from  './MediaDetails'
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="app">
        <LeftSideBar {...this.props} />
        <Switch>
        	<Route exact path="/" component={() => <Feed {...this.props} />}/>
          <Route path="/media/:id" component={() => <MediaDetails {...this.props} />}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	accessToken: state.user.access_token
});

export default withRouter(connect(
	mapStateToProps,
	null
)(App));
