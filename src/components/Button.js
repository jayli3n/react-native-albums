import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	const { buttonStyle, textStyle } = styles;
	const { text, url } = props;

	return (
		<TouchableOpacity style={buttonStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},

	buttonStyle: {
		flex: 1,
		alignself: 'stretch',
		backgroundColor: '#007aff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		padding: 10,
	}
};

export default Button;
