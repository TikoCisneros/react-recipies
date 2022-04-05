import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input tests', () => {
  test('renders input text', () => {
    const placeholder = "Write something here";
    render(<Input placeholder={placeholder} />);
    const inputNode = screen.getAllByPlaceholderText(placeholder);
    expect(inputNode[0]).toBeInTheDocument();
  });

  test('renders textarea with full width', () => {
    const placeholder = "Write something here";
    render(<Input placeholder={placeholder} type="textarea" block />);
    const inputNode = screen.getAllByPlaceholderText(placeholder);
    expect(inputNode[0]).toBeInTheDocument();
  });
});
