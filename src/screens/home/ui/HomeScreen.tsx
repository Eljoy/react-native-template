import styled from 'styled-components/native';

import { Typography } from '@shared/ui';

export const HomeScreen = () => (
  <StyledWrapper>
    <Typography variant="title">react-native-template</Typography>
    <Typography variant="caption">
      Edit src/screens/home/ui/HomeScreen.tsx to get started
    </Typography>
  </StyledWrapper>
);

const StyledWrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  gap: ${({ theme }) => theme.spacing.sm}px;
  justify-content: center;
`;
