import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen  from './Components//StackComponents/HomeScreen';
import DetailsScreen from './Components/StackComponents/DetailsScreen';
import LogoTitle from './Components/StackComponents/LogoTitle';
import ModalScreen from './Components/ModalScreen';
import TabContainer from './Components/TabComponents/TabContainer';
import Authentication from './Components/Auth/Authentication';

const MainStack =  StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen
  },
  TabStack: TabContainer
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitle: <LogoTitle/>,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  },
});

export default Authentication;

// export default StackNavigator({
//   Main: {
//     screen: MainStack
//   },
//   Modal: {
//     screen: ModalScreen
//   }
// }, {
//   mode: 'modal', //card
//   headerMode: 'none',
// })
