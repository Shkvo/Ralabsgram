import React, { Component } from 'react';
import { userRecentMedia } from '../endpoints';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Feed extends Component {
	state = {
		userMedia: []
	}

	async componentWillMount() {
		const userMedia = await axios.get(`${userRecentMedia}?access_token=${this.props.accessToken}`);

		this.setState({
			userMedia: userMedia.data.data
		})
	}

	render() {
		const { userMedia } = this.state;
		console.log(userMedia);
		const newMedia = [...userMedia];

		if (newMedia.length) {
			newMedia.push(userMedia[1]);
			newMedia.push(userMedia[0]);
			newMedia.push(userMedia[1]);
			newMedia.push(userMedia[0]);
			newMedia.push(userMedia[1]);
			newMedia.push(userMedia[2]);
		}

		const feedMedia = (newMedia || []).map((media, index) => <Link key={index} to="/"><img alt={`Media ${index}`} src={media.images.standard_resolution.url} /></Link>);

		return (
			<div className="feed-container">
				{feedMedia}
			</div>
		)
	}
}

export default Feed;
