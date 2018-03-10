import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GET_MEDIA_DETAILS } from '../actions/types';

class MediaDetails extends Component {

	componentWillMount() {
		const mediaID = this.props.location.pathname.slice('7');

		this.props.getMediaDetails(mediaID, this.props.accessToken);
	}

	render() {
		const { mediaDetails } = this.props;
		console.log(mediaDetails);

		return (

			<div>
				<img alt="main" src={mediaDetails.id && mediaDetails.images.standard_resolution.url}></img>
				{/* {feed} */}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	mediaDetails: state.mediaDetails,
});

const mapDispatchToProps = (dispatch) => ({
	getMediaDetails(id ,accessToken) {
		dispatch({ type: GET_MEDIA_DETAILS, payload: { id, accessToken } });
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaDetails);
