import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { RootNavigator } from './navigation';
import { ThemeProvider } from './providers';

export const App = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaProvider>
);
