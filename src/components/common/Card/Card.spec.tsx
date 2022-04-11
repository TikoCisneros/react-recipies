import React from 'react';
import { render, screen } from '@testing-library/react';
import { cardData } from './Card.stories';
import Card from './Card'; 

describe('Card tests', () => {
  test('render', () => {
    render(
      <Card>
        <Card.CardImage {...cardData} />
        <Card.CardBody>
          <strong>I'm a strong</strong>
        </Card.CardBody>
      </Card>,
    );
    const strongText = screen.getByText(/I'm a strong/i);
    expect(strongText).toBeInTheDocument();
  });
});