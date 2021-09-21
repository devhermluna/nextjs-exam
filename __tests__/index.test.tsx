import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Categories/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a categories', () => {
    expect(screen.getByText('Photos').closest('a')).toHaveAttribute('href', '/photos');
    expect(screen.getByText('Jobs').closest('a')).toHaveAttribute('href', '/jobs');
  });
});
