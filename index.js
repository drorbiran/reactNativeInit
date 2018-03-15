import { AppRegistry } from 'react-native';
import App from './App';
import {Navigation} from 'react-native-navigation';

// AppRegistry.registerComponent('reactNativeInit', () => App);
Navigation.registerComponent('reactNativeInit.App', () => App);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'reactNativeInit.App', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});

