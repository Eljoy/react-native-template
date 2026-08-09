import { View } from 'react-native';

import { Typography } from '@shared/ui';

export const HomeScreen = () => (
  <View className="flex-1 items-center justify-center gap-2 bg-background">
    <Typography variant="title">react-native-template</Typography>
    <Typography variant="caption">
      Edit src/screens/home/ui/HomeScreen.tsx to get started
    </Typography>
  </View>
);
