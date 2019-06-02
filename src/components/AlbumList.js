import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const API = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
	constructor() {
		super();
		this.state = {
			albums: []
		};
	}

	componentWillMount() {
		axios.get(API).then(response => {
			this.setState({
				albums: response.data
			});
		});
	}

	render() {
		return (
			<View>
				{this.state.albums.map((album, i) => {
					const { title, artist, url, image, thumbnail_image } = album;
					return (
						<View key={i}>
							<Text>{title}</Text>
							<Text>{artist}</Text>
							<Text>{url}</Text>
							<Text>{image}</Text>
							<Text>{thumbnail_image}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

export default AlbumList;
