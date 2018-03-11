import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { GET_MEDIA_DETAILS } from '../actions/types';
import Spinner from './Spinner';

class MediaDetails extends Component {

	state = {
		loading: true
	}

	componentWillMount() {
		const mediaID = this.props.location.pathname.slice('7');

		this.props.getMediaDetails(mediaID, this.props.accessToken);
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
	}

	render() {
		const { mediaDetails } = this.props;
		// console.log(mediaDetails);

		if (this.state.loading) {
			return <Spinner />;
		}

		return (
			<div className="media-details">
				<div onClick={this.getHistoryPreviousPath}>
					<i className="fas fa-angle-left" />
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
					</aside>
				</section>
			</div>
		);

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
