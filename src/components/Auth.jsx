import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import creds from '../credentials.json';
import { LOGIN } from '../actions/types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const authorizationURL = 'https://api.instagram.com/oauth/authorize/?client_id=' +
  creds.CLIENT_ID + '&redirect_uri=' +
  creds.REDIRECT_URI + '&response_type=token';

class Auth extends Component {

  access_token = '';

  componentWillMount() {
    if (this.props.location.pathname === '/login/') {
      this.access_token = this.props.location.hash.slice(14);

      this.props.login(this.access_token);
      this.props.history.push('/');

    } else {
      window.location = authorizationURL;
    }
  }

  render() {
    const { isLogged } = this.props;
    console.log(isLogged);

    return (
      <MuiThemeProvider>
        {
          isLogged ?

            this.props.children :

            <div className="spinner-wrapper">
              <CircularProgress color="purple" />
            </div>
        }
      </MuiThemeProvider>
    );
  }

}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
});

const mapDispatchToProps = (dispatch) => ({
  login(token) {
    dispatch({ type: LOGIN, payload: token });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth));