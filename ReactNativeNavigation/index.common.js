/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Alert,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SecondPage from './secondpage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  secondbtn: {
    marginTop: 50,
    backgroundColor: '#984367',
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props);

    this.onPressed = () => {
      Alert.alert("Alert Title", "TEST MSG", 
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false });
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="act Button"
          color='#679843'
          onPress={this.onPressed} />
        <View style={styles.secondbtn} >
          <Button
            onPress={() => {navigate('Sub', {txt: "Sub Screen Text"});}}
            title="Transition Sub screen" />
        </View>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {screen: HomeScreen},
  Sub: {screen: SecondPage}
});