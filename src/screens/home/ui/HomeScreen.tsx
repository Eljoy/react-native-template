import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Typography } from '@shared/ui';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center gap-2 bg-background">
      <Typography variant="title">{t('home.title')}</Typography>
      <Typography variant="caption">{t('home.subtitle')}</Typography>
    </View>
  );
};
