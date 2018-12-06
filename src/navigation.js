import react from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapScreen from './MapScreen';
import SocialScreen from './SocialScreen';

const AppNavigator = createStackNavigator({
    Social: SocialScreen,
    Maps: MapScreen
  },{
      initialRouteName: 'Social'
  });



    
  export const AppContainer = createAppContainer(AppNavigator);