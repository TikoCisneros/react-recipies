import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

test('renders PageHeader correctly', () => {
  const { container } = render(<PageHeader title="My page" description="My page is beauty!" />);
  expect(container).toMatchSnapshot();
});