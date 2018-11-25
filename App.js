import React from 'react';
import { StyleSheet, View } from 'react-native';
import {RkButton,} from 'react-native-ui-kitten';

import Background from './Components/Background.js'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Background />
        <RkButton>Click me!</RkButton>
      </View>
    )
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

