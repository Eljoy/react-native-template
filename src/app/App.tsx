import '../global.css';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { initAppI18n } from './i18n';
import { RootNavigator } from './navigation';
import { QueryProvider } from './providers';

initAppI18n();

export const App = () => (
  <SafeAreaProvider>
    <QueryProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </QueryProvider>
  </SafeAreaProvider>
);
