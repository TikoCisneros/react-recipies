import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Block = Template.bind({});
Block.args = { block: true };

export const Textarea = Template.bind({});
Textarea.args = { type: 'textarea' };