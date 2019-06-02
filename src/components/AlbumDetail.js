import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	const { title, artist, url, image, thumbnail_image } = props.album;

	return (
		<Card>
			<CardSection>
				<Text>{title}</Text>
			</CardSection>
			<CardSection>
				<Text>{artist}</Text>
			</CardSection>
			<CardSection>
				<Text>{url}</Text>
			</CardSection>
			<CardSection>
				<Text>{image}</Text>
			</CardSection>
			<CardSection>
				<Text>{thumbnail_image}</Text>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
