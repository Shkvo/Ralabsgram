import React, { Component } from 'react';
import LeftSideBar from './LeftSideBar';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Feed from './Feed';
import PageNotFound from './404';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="app">
        <LeftSideBar {...this.props} />
        <Switch>
        	<Route exact path="/" component={(props) => <Feed accessToken={this.props.access_token} {...props} />}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	access_token: state.user.access_token
});

export default connect(
	mapStateToProps,
	null
)(App);
