import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from './RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Foo'>;

export const FooScreen: React.FC<Props> = () => {
  return <></>;
};
