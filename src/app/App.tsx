import '../global.css';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { initI18n } from '@shared/lib/i18n';

import { RootNavigator } from './navigation';

initI18n();

export const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);
