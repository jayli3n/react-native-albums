import React from 'react';
import { Text, View, Stylesheet } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	const { headerText } = props;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		setHeight: 60,
		paddingTop: 30,
		backgroundColor: '#F8F8F8',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		elevation: 2,
		position: 'relative',
	},

	textStyle: {
		fontSize: 20
	}
};

export default Header;
