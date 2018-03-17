import React from 'react';
import { View, Text, Button,StyleSheet, AsyncStorage,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import DismissKeyboardHOC from './DismissKeyboardHOC';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
      };
    constructor() {
        super();
        this.styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            },
            vone: {
                flex: 0.7,
                alignItems: 'center',
                justifyContent: 'center',
            },
            vtwo: {
                flex:0.3,
                alignItems: 'center',
                justifyContent: 'center',
            }
          });
    }    
  
    render() {
        const DismissKeyboardView = DismissKeyboardHOC(View, this.styles.container);
      return (
        <DismissKeyboardView style = {this.styles.container}>
            <View style={this.styles.container}>
                <View style={this.styles.vone}>
                <Button title="Sign me in!" onPress={this._signInAsync} />          
            </View>
                <View style={this.styles.vtwo}>
                    <Hideo
                    iconClass={FontAwesomeIcon}
                    iconName={'envelope'}
                    iconColor={'white'}
                    // this is used as backgroundColor of icon container view.
                    iconBackgroundColor={'#f2a59d'}
                    inputStyle={{ color: '#464949' }}                    
                    />
                </View>
            </View>         
        </DismissKeyboardView>  
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }
  

export default SignInScreen;