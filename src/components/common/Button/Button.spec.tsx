import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button tests', () => {
  test('renders primary', () => {
    render(<Button label="Primary button" />);
    const btn = screen.getByText(/Primary button/i);
    expect(btn).toBeInTheDocument();
  });
  test('renders secondary', () => {
    render(<Button label="Secondary button" color="secondary" />);
    const btn = screen.getByText(/Secondary button/i);
    expect(btn).toBeInTheDocument();
  });
  test('renders primary block and check click', () => {
    const myFn = jest.fn();
    render(<Button label="Block button" onClick={myFn} block/>);
    const btn = screen.getByText(/Block button/i);
    fireEvent.click(btn);
    expect(btn).toBeInTheDocument();
    expect(myFn).toHaveBeenCalled();
  });
});
