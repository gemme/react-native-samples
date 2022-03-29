/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {BookList} from 'components/BookList';
import {BookInfo} from 'components/BookInfo';
import {AddReview} from 'components/AddReview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const RootNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BookList} />
      <Stack.Screen name="Info" component={BookInfo} />
    </Stack.Navigator>
  );
};

const App = () => {
  // Provider navigation
  return (
    <NavigationContainer>
      <RootNavigator.Navigator>
        <RootNavigator.Group>
          <RootNavigator.Screen
            name={'root'}
            component={AppNavigator}
            options={{headerShown: false}}
          />
        </RootNavigator.Group>
        <RootNavigator.Group screenOptions={{presentation: 'modal'}}>
          <RootNavigator.Screen
            name={'reviews'}
            component={AddReview}
            options={{headerShown: false}}
          />
        </RootNavigator.Group>
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
