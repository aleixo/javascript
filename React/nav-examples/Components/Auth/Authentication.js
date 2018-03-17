import { StackNavigator, SwitchNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from './SignInScreen';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen });

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);