import React from 'react';
import { render, screen } from '@testing-library/react';
import { FAKE_PRODUCT } from './ProductCard.stories';
import ProductCard from './ProductCard'; 

describe('ProductCard tests', () => {
  test('render', () => {
    render(
      <ProductCard data={FAKE_PRODUCT} />
    );
    const productTitle = screen.getByText(FAKE_PRODUCT.title);
    expect(productTitle).toBeInTheDocument();
  });
});
