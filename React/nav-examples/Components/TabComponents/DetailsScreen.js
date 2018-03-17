import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

export default DetailsScreen;