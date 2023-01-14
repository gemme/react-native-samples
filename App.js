/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {BookList} from 'components/BookList';
import {BookInfo} from 'components/BookInfo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BookList}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Info" component={BookInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
