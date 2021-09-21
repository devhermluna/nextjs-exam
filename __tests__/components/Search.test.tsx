import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../components/Search';

describe('Search', () => {
  it('renders a search', () => {
    render(
      <Search
        onChange={(value) => {
          console.log(value);
        }}
        page={1}
        perPage={20}
        totalResults={100}
        onPrev={() => {
          console.log('on prev was clicked!');
        }}
        onNext={() => {
          console.log('on next was clicked!');
        }}
      />,
    );

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('should change the value when searching', () => {
    render(
      <Search
        onChange={jest.fn()}
        page={1}
        perPage={20}
        totalResults={100}
        onPrev={() => {
          console.log('on prev was clicked!');
        }}
        onNext={() => {
          console.log('on next was clicked!');
        }}
      />,
    );

    const newValue = 'testing using RTL';
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: newValue } });
    expect(input.value).toBe(newValue);
  });

  it('should test prev button', () => {
    let page = 1;

    const createComponent = (p) => (
      <Search
        onChange={jest.fn()}
        page={p}
        perPage={20}
        totalResults={100}
        onPrev={() => {
          page -= 1;
        }}
        onNext={() => {
          page += 1;
        }}
      />
    );

    const { rerender } = render(createComponent(page));

    const prevButton = screen.getByTestId('chevron-left');
    const nextButton = screen.getByTestId('chevron-right');

    fireEvent.click(prevButton);
    expect(page).toBe(1);

    rerender(createComponent(page));

    fireEvent.click(nextButton);
    expect(page).toBe(2);

    rerender(createComponent(page));

    fireEvent.click(prevButton);
    expect(page).toBe(1);
  });

  it('should test next button', () => {
    let page = 5;

    const createComponent = (p) => (
      <Search
        onChange={jest.fn()}
        page={p}
        perPage={20}
        totalResults={100}
        onPrev={() => {
          page -= 1;
        }}
        onNext={() => {
          page += 1;
        }}
      />
    );

    const { rerender } = render(createComponent(page));

    const prevButton = screen.getByTestId('chevron-left');
    const nextButton = screen.getByTestId('chevron-right');

    fireEvent.click(nextButton);
    expect(page).toBe(5);

    rerender(createComponent(page));

    fireEvent.click(prevButton);
    expect(page).toBe(4);

    rerender(createComponent(page));

    fireEvent.click(nextButton);
    expect(page).toBe(5);
  });
});
