import React from 'react';
import { View, Text, Button } from 'react-native';

class OtherScreen extends React.Component {
    static navigationOptions = {
      title: 'Lots of features here',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

export default OtherScreen;