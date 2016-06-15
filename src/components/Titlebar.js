import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  titlebar: {
    flex: 1,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33333b',
  },
  title: {
    color: '#FFFFFF',
  },
});

class Titlebar extends Component {
  render() {
    return (
      <View style={styles.titlebar}>
        <Text style={styles.title}>Events</Text>
      </View>
    );
  }
}

export default Titlebar;
