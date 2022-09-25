import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Foo: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
