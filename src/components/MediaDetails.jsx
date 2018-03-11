import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GET_MEDIA_DETAILS, GET_MEDIA_COMMENTS } from '../actions/types';
import Spinner from './Spinner';

class MediaDetails extends Component {

	state = {
		loading: true,
	}

	componentWillMount() {
		const mediaID = this.props.location.pathname.slice('7');

		this.props.getMediaDetails(mediaID, this.props.accessToken);
		this.props.getMediaComments(mediaID, this.props.accessToken);
	}

	componentWillReceiveProps(nextProps) {
		const isReceivedNewProps = JSON.stringify(this.props.mediaDetails) !== JSON.stringify(nextProps.mediaDetails);

		if (isReceivedNewProps) {
			this.setState({
				loading: false
			});
		}
	}

	getHistoryPreviousPath = () => {
		this.props.history.go(-1);
	};

	render() {
		const { mediaDetails, mediaComments } = this.props;
		// console.log(mediaDetails);

		if (this.state.loading) {
			return <Spinner />;
		}

		const comments = mediaComments.map((comment, index) => (
			<p key={index}>
				<Link to="/">{comment.from.username}</Link>
				{comment.text}
			</p>
		));
		
		return (
			<div className="media-details">
				<div onClick={this.getHistoryPreviousPath}>
					<i className="fas fa-chevron-left" />
				</div>
				<section>
					<img alt="main" src={mediaDetails.images.standard_resolution.url} />
					<aside>
						<div className="user">
							<img src={mediaDetails.user.profile_picture} alt="User" />
							<div>
								<h4>
									{mediaDetails.user.username}
								</h4>
								<h5>
									{mediaDetails.location.name}
								</h5>
							</div>
						</div>
						<div className="comments">
							{comments}
						</div>
						<div className="comment-input">
							<input onBlur={this.handleCommentsInputFocus} onFocus={this.handleCommentsInputFocus} type="text" placeholder="Add a comment..."/>
							<div className="send-button-wrapper">
								<i className="fas fa-paper-plane" />
							</div>
						</div>
					</aside>
				</section>
			</div>
		);

	}
}

const mapStateToProps = (state) => ({
	mediaDetails: state.media.details,
	mediaComments: state.media.comments
});

const mapDispatchToProps = (dispatch) => ({
	getMediaDetails(id ,accessToken) {
		dispatch({ type: GET_MEDIA_DETAILS, payload: { id, accessToken } });
	},
	getMediaComments(id ,accessToken) {
		dispatch({ type: GET_MEDIA_COMMENTS, payload: { id, accessToken } });
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaDetails);
