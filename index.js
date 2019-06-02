// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// 
// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
	return (
		<View>
			<Header headerText='Albums' />
			<AlbumList />
		</View>
	);
};

AppRegistry.registerComponent('albums', () => App);
