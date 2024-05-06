import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/screens/Home';
import Login from './app/screens/Login';
import ProducDetails, {
  Params as ProducDetailsParams,
} from './app/screens/ProducDetails';
const Stack = createStackNavigator();
/* creamos el archivo app/screens/Home.tsx */

export type RootStackParamList = {
  Home: undefined;
  ProducDetails: ProducDetailsParams;
};

function App(): React.JSX.Element {
  return  (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
          name='Login' 
          component={Login} 
          options = {{
            headerShown: false,
            headerStyle: { backgroundColor: '#0ff040' },
          }}
          />
          <Stack.Screen 
          name='Home' 
          component={Home}
          options = {{
            headerShown: true,
            headerStyle: { backgroundColor: 'blue' },
          }} 
          /><Stack.Screen 
          name='ProducDetails' 
          component={ProducDetails}
          options = {{
            headerShown: true,
            headerStyle: { backgroundColor: 'blue' },
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  
);
  
}

export default App;
