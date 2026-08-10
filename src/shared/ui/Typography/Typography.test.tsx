import { render, screen } from '@testing-library/react-native';

import { Typography } from './Typography';

describe('Typography', () => {
  it('renders its children', () => {
    render(<Typography>hello</Typography>);

    expect(screen.getByText('hello')).toBeOnTheScreen();
  });
});
