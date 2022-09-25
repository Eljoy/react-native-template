import { Provider } from 'react-redux';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { FooScreen, RootStack } from '@screens';
import { StatusBar } from 'react-native';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" animated={true} />
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Foo">
          <RootStack.Screen name="Foo" component={FooScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
