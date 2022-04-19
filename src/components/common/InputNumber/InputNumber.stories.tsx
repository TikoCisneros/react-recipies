import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputNumber from './InputNumber';


export default {
  title: 'Components/Common/InputNumber',
  component: InputNumber,
  argTypes: {},
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {};