import React, { Component } from 'react';
import Titlebar from './../components/Titlebar';
import { View, StyleSheet, StatusBar } from 'react-native';
import EvenList from './../components/EventsList';

const styles = StyleSheet.create({
  screen: {
    alignSelf: 'stretch',
  },
});

class EventsListScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
       <StatusBar hidden={true} />
        <Titlebar />
        <EvenList />
      </View>
    );
  }
}

export default EventsListScreen;
