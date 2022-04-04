import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Button', color: 'secondary' };

export const PrimaryBlock = Template.bind({});
PrimaryBlock.args = { label: 'Button', block: true };
