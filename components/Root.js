import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import clrs from '../utils/clrs';

class batrock extends Component {
  render() {
    return (
      <View style={styles.container}>

        <StatusBar backgroundColor={clrs.yellow} barStyle='light-content'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.white,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: clrs.black,
    marginBottom: 5,
  },
});

export default batrock;