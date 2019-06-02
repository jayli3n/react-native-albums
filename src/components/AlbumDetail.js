import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
	const { title, artist, url, image, thumbnail_image } = props.album;

	return (
		<View>
			<Text>{title}</Text>
			<Text>{artist}</Text>
			<Text>{url}</Text>
			<Text>{image}</Text>
			<Text>{thumbnail_image}</Text>
		</View>
	);
};

export default AlbumDetail;
