import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen';
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title='GO TO DETAILS IN STACK'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
export default SettingsScreen;