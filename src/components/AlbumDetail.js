import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const openUrl = (url) => {
	Linking.openURL(url);
};

const AlbumDetail = (props) => {
	const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, albumCoverStyle } = styles;
	const { title, artist, url, image, thumbnail_image } = props.album;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={albumCoverStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button text='Buy Now' onPress={() => openUrl(url)} />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	headerTextStyle: {
		fontSize: 19,
		fontWeight: '600',
	},
	thumbnailStyle: {
		height: 54,
		width: 54,
		borderRadius: 27,
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	albumCoverStyle: {
		flex: 1,
		height: 300,
		width: null,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 3,
	}
};

export default AlbumDetail;
