import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import Orders from './src/screens/Orders';
import Account from './src/screens/Account';
import { Navigation } from './src/layouts/Navigation';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => <Header />
          }}
        name="Tab" component={Navigation} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Account" component={Account} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
