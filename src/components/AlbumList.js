import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
			<ScrollView>
				{this.state.albums.map((album, i) => {
					return (
						<AlbumDetail key={i} album={album} />
					);
				})}
			</ScrollView>
		);
	}
}

export default AlbumList;
