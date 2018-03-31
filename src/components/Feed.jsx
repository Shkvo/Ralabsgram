import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GET_USER_MEDIA } from '../actions/types';

export class Feed extends Component {

	componentWillMount() {
		this.props.getUserMedia(this.props.accessToken);
	}

	render() {
		const { userMedia } = this.props;

		const feed = (userMedia || [])
			.map((media, index) => (
				<Link key={index} to={`/media/${media.id}`}>
					<img alt={`Media ${index}`} src={media.images.standard_resolution.url} />
				</Link>
			));

		return (
			<div className="feed-container">
				{feed}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	userMedia: state.user.media,
});

const mapDispatchToProps = (dispatch) => ({
	getUserMedia(accessToken) {
		dispatch({ type: GET_USER_MEDIA, payload: accessToken });
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
