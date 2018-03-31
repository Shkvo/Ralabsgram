import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	GET_MEDIA_LIKES,
	GET_MEDIA_DETAILS,
	GET_MEDIA_COMMENTS,
	POST_MEDIA_COMMENT, 
	DELETE_MEDIA_COMMENT,
	POST_MEDIA_LIKE,
	DELETE_MEDIA_LIKE
} from '../actions/types';

import Spinner from './Spinner';

export class MediaDetails extends Component {

	state = {
		loading: true,
		commentText: '',
	}

	componentWillMount() {
		const mediaID = this.props.location.pathname.slice('7');

		this.props.getMediaDetails(mediaID, this.props.accessToken);
		this.props.getMediaComments(mediaID, this.props.accessToken);
		this.props.getMediaLikes(mediaID, this.props.accessToken);
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

	handleCommentChange = (event) => {
		this.setState({
			commentText: event.target.value
		})
	};

	handleCommentPost = () => {
		const { userInfo, postMediaComment } = this.props;
		const { commentText } = this.state;

		this.setState({
			commentText: ''
		});
		
		postMediaComment(userInfo.username, commentText);
	};

	handleCommentDelete = (commentID) => {
		const { deleteMediaComment } = this.props;

		deleteMediaComment(commentID);
	};

	handleLikeChange = () => {
		const { deleteMediaLike, postMediaLike, userInfo, mediaLikes } = this.props;
		const isUserLiked = mediaLikes.find((like) => like.id === userInfo.id);
		
		if (isUserLiked) {
			deleteMediaLike(userInfo.id);
		} else {
			postMediaLike(userInfo.id, userInfo.username);
		}

	};

	render() {
		const { mediaDetails, mediaComments, mediaLikes } = this.props;
		
		if (this.state.loading) {
			return <Spinner />;
		}

		const comments = mediaComments.map((comment, index) => (
			<p key={index}>
				<span className="user-wrapper">
					<Link to="/">{comment.from.username}</Link>
					<div onClick={this.handleCommentDelete.bind(null, index)}>
						<i className="fas fa-times" />
					</div>
				</span>
				{comment.text}
			</p>
		));

		return (
			<div className="media-details">
				<div onClick={this.getHistoryPreviousPath}>
					<i className="fas fa-chevron-left" />
				</div>
				<section>
					<div className="media-details-photo" onClick={this.handleLikeChange}>
						<img alt="main" src={mediaDetails.images.standard_resolution.url} />
						<i className="fas fa-heart main-heart" />
						<div className="likes-container">
							<span>{ mediaLikes.length }</span>
							<i className="fas fa-heart likes" />
						</div>
					</div>
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
							<input value={this.state.commentText} onChange={this.handleCommentChange} type="text" placeholder="Add a comment..."/>
							<div onClick={this.handleCommentPost} className="send-button-wrapper">
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
	mediaComments: state.media.comments,
	mediaLikes: state.media.likes,
	userInfo: state.user.info
});

const mapDispatchToProps = (dispatch) => ({
	getMediaDetails(id, accessToken) {
		dispatch({ type: GET_MEDIA_DETAILS, payload: { id, accessToken } });
	},
	getMediaComments(id, accessToken) {
		dispatch({ type: GET_MEDIA_COMMENTS, payload: { id, accessToken } });
	},
	postMediaComment(username, text) {
		dispatch({ type: POST_MEDIA_COMMENT, payload: { from: { username }, text } });
	},
	deleteMediaComment(id) {
		dispatch({ type: DELETE_MEDIA_COMMENT, payload: id });
	},
	getMediaLikes(id, accessToken) {
		dispatch({ type: GET_MEDIA_LIKES, payload: { id, accessToken } });
	},
	postMediaLike(id, username) {
		dispatch({ type: POST_MEDIA_LIKE, payload: {id , username } });
	},
	deleteMediaLike(id) {
		dispatch({ type: DELETE_MEDIA_LIKE, payload: id });
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaDetails);
