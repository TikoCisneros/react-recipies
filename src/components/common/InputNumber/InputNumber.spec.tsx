import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import InputNumber from './InputNumber'; 

describe('InputNumber tests', () => {
  test('renders correctly', () => {
    render(<InputNumber />);
    const input = screen.getByTestId<HTMLInputElement>('display');
    expect(input.value).toBe('0');
  });
  test('increase and decrease value', () => {
    const myFn = jest.fn();
    render(<InputNumber onChange={myFn} />);
    const input = screen.getByTestId<HTMLInputElement>('display');
    const increaseBtn = screen.getByTestId<HTMLButtonElement>('increase');
    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    expect(input.value).toBe('2');
    const decreaseBtn = screen.getByTestId<HTMLButtonElement>('decrease');
    fireEvent.click(decreaseBtn);
    expect(input.value).toBe('1');
    expect(myFn).toHaveBeenCalledTimes(3);
  });
});
