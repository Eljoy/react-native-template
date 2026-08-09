import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens/home';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      component={HomeScreen}
      name="Home"
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
