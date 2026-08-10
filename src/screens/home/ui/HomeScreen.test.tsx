import { render, screen } from '@testing-library/react-native';

import { HomeScreen } from './HomeScreen';

describe('HomeScreen', () => {
  it('renders the template title', () => {
    render(<HomeScreen />);

    expect(screen.getByText('react-native-template')).toBeOnTheScreen();
  });
});
