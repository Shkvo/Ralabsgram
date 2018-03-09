import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { userInfo } from '../endpoints';

class LeftSideBar extends Component {

  state = {
    userData: {}
  };

  async componentWillMount() {

    const userData = await axios.get(`${userInfo}?access_token=${this.props.access_token}`);

    this.setState({
      userData: userData.data.data
    });

  }

  render() {
    const userData = this.state.userData;
    console.log(userData);
    return (
      userData.id ?
      <nav>
        <Link to="/">
          <h1 className="logo">Ralabsgram</h1>
        </Link>
        <div className="profile">
          <img alt="User" src={userData.profile_picture} />
          <h4>{userData.username}</h4>
          {
            userData.bio &&
            <div className="bio">
              {
                userData.bio.split('\n').map((item, index) => <h5 key={index}>{item}</h5>)
              }
              <a href={userData.website}>
                <h5>{userData.website}</h5>
              </a>
            </div>
          }
          <div className="user-metrics">
            <h4>Publications: <span>{userData.counts.media}</span></h4>
            <Link to="/"><h4>Followers: <span>{userData.counts.followed_by}</span></h4></Link>
            <Link to="/"><h4>Follows: <span>{userData.counts.follows}</span></h4></Link>
          </div>
        </div>
      </nav> : ''
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(
  null,
  mapDispatchToProps
)(LeftSideBar);
