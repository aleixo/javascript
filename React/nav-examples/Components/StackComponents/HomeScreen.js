import React from 'react';
import { View, Text, Button } from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps, navigationOptions }) => {    
    const params = navigation.state.params || {};
    
    return {
      title: params ? params.otherParam : 'Home',            
      headerRight: <Button onPress={params.increaseCount} title="+1" color="#fff" />
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }  

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen has {this.state.count}</Text>
        
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Details Screen',
          })}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated Home!'})}
        />

        <Button
          title='Show me modal'
          onPress ={ () => this.props.navigation.navigate('Modal')}
        />
        <Button
          title='Show me TABS'
          onPress ={ () => this.props.navigation.navigate('TabStack')}
        />
      </View>
    );
  }
}

export default HomeScreen;