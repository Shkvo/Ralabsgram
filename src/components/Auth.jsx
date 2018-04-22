import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import creds from '../credentials.json';
import { LOGIN } from '../actions/types';
import Spinner from './Spinner';

const authorizationURL =
  'https://api.instagram.com/oauth/authorize/?client_id=' +
  `${creds.CLIENT_ID}` +
  '&redirect_uri=' +
  `${creds.REDIRECT_URI}` +
  '&response_type=token';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.accessToken = '';
  }

  componentWillMount() {
    if (this.props.location.pathname === '/login/') {
      this.accessToken = this.props.location.hash.slice(14);

      this.props.login(this.accessToken);
      this.props.history.push('/');
    } else {
      window.location = authorizationURL;
    }
  }

  render() {
    const { isLogged } = this.props;

    return (
      <MuiThemeProvider>
        {isLogged ? this.props.children : <Spinner />}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login(token) {
    dispatch({ type: LOGIN, payload: token });
  },
});

Auth.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  children: PropTypes.element,
};

Auth.defaultProps = {
  children: null,
  history: undefined,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
