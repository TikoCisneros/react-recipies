import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar tests', () => {
  test('should open menu', () => {
    render(<Navbar />);
    const navCollapse = screen.getByTestId('nav-collapse');
    expect(navCollapse).toBeInTheDocument();
    expect(navCollapse.classList.contains('navbar__collapse--open')).toBeFalsy();
    const navIcon = screen.getByTestId('nav-icon');
    expect(navIcon).toBeInTheDocument();
    fireEvent.click(navIcon);
    expect(navCollapse).toHaveClass('navbar__collapse--open');
  });
});
