import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import EventsListScreen from './src/containers/EventsListScreen';

class FBEventsSuggestions extends Component {
  render() {
    return (
      <EventsListScreen />
    );
  }
}

AppRegistry.registerComponent('FBEventsSuggestions', () => FBEventsSuggestions);
