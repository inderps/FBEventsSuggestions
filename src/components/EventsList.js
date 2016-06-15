import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  event: {
    height: 80,
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#33333b',
  },
  location: {
    fontSize: 12,
    color: '#b08fc0',
  },
  attendees: {
    fontSize: 10,
    color: '#b08fc0',
  },
});

class EvenList extends Component {
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ title: 'Some-title', location: 'New Delhi', attendees: 'some-attendees' }]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(event) => {
            return (<View style={styles.event}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.location}>{event.location}</Text>
              <Text style={styles.attendees}>{event.attendees}</Text>
            </View>);
          }}
        />
      </View>
    );
  }
}

export default EvenList;
