import React from 'react';
import { render, screen } from '@testing-library/react';
import { FAKE_CARD_DATA } from './constants';
import Card from './Card'; 

describe('Card tests', () => {
  test('render', () => {
    render(
      <Card>
        <Card.Image {...FAKE_CARD_DATA} />
        <Card.Body>
          <strong>I'm a strong</strong>
        </Card.Body>
        <Card.Actions>
          <span>Action</span>
        </Card.Actions>
      </Card>,
    );
    const strongText = screen.getByText(/I'm a strong/i);
    expect(strongText).toBeInTheDocument();
  });
});
