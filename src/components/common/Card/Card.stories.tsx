import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Common/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

export const Default = () => <Card className="p-8 bg-orange-200" />;

export const WithBody = () => (
  <Card>
    <Card.CardBody>
      <strong>I'm a strong</strong>
    </Card.CardBody>
  </Card>
);

export const FAKE_CARD_DATA = {
  src: 'https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: 'Flower and sky'
}

export const WithImage = () => (
  <Card>
    <Card.CardImage {...FAKE_CARD_DATA} />
  </Card>
);

export const WithImageAndBody = () => (
  <Card>
    <Card.CardImage {...FAKE_CARD_DATA} />
    <Card.CardBody>
      <strong>I'm a strong</strong>
    </Card.CardBody>
  </Card>
);