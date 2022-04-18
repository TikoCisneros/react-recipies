import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Card from './index';
import { FAKE_CARD_DATA } from './constants';

export default {
  title: 'Components/Common/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

export const Default = () => <Card className="p-8 bg-orange-200" />;

export const WithBody = () => (
  <Card>
    <Card.Body>
      <strong>I'm a strong</strong>
    </Card.Body>
  </Card>
);

export const WithImage = () => (
  <Card>
    <Card.Image {...FAKE_CARD_DATA} />
  </Card>
);

export const CompleteStructure = () => (
  <Card>
    <Card.Image {...FAKE_CARD_DATA} />
    <Card.Body>
      <strong>I'm in the body</strong>
    </Card.Body>
    <Card.Actions>
      <span>Action A</span>
      <span>Action B</span>
    </Card.Actions>
  </Card>
);
