import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.backgrougContainer}>
        </View>
      )
      
    }
    
  }

  const styles = StyleSheet.create({
    backgrougContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });