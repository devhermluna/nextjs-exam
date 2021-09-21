import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MetaButton from '../../components/MetaButton';

describe('MetaButton', () => {
  it('renders a button', () => {
    render(
      <MetaButton
        disabled={false}
        callback={() => {
          console.log('run a function here.');
        }}
        icon="chevron-left"
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should click change the value on button click', () => {
    let currentPage = 2;

    const component = (
      <MetaButton
        disabled={currentPage === 1}
        callback={() => {
          if (currentPage === 1) return;
          currentPage -= 1;
        }}
        icon="chevron-left"
      />
    );

    const { rerender } = render(component);

    expect(currentPage).toBe(2);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(currentPage).toBe(1);

    rerender(component);

    fireEvent.click(button);
    expect(currentPage).toBe(1);
  });
});
