import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class SecondPage extends Component {
	static navigationOptions = {
		title: 'Sub',
	};

	render(){
		const {state} = this.props.navigation;
		return (
			<View style={styles.container} >
		        <Text>
		          {state.params.txt}
		        </Text>
			</View>
		)
	}
}