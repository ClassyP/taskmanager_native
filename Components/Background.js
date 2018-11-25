import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import pretty_scrn from './Images/pretty_scrn.jpg'

export default class Background extends React.Component {
    render() {
      return (
        <ImageBackground src={pretty_scrn} style={styles.backgrougContainer}>
        <view style={styles.container}>
            
        </view>
        </ImageBackground>
      )
      
    }
    
  }

  const styles = StyleSheet.create({
    backgrougContainer: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {

    }
  });