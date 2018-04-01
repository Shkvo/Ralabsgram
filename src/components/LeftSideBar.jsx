import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_USER_INFO } from '../actions/types';

export class LeftSideBar extends Component {

  componentWillMount() {
    this.props.getUserInfo(this.props.accessToken);
  }

  render() {
    const userInfo = this.props.userInfo;

    return (
      userInfo.id ?
      <nav>
        <Link to="/">
          <h1 className="logo">
            Ralabsgram
          </h1>
        </Link>
        <div className="profile">
          <img alt="User" src={userInfo.profile_picture} />
          <h4>{userInfo.username}</h4>
          {
            userInfo.bio &&
            <div className="bio">
              {
                userInfo.bio.split('\n').map((item, index) => <h5 key={index}>{item}</h5>)
              }
              <a href={userInfo.website}>
                <h5>{userInfo.website}</h5>
              </a>
            </div>
          }
          <div className="user-metrics">
            <h4>Publications: <span>{userInfo.counts.media}</span></h4>
            <Link to="/"><h4>Followers: <span>{userInfo.counts.followed_by}</span></h4></Link>
            <Link to="/"><h4>Follows: <span>{userInfo.counts.follows}</span></h4></Link>
          </div>
        </div>
      </nav> : ''
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo(accessToken) {
    dispatch({ type: GET_USER_INFO, payload: accessToken })
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSideBar);
