import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './ProductCard';
import { FAKE_PRODUCT } from './constants';


export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = { data: FAKE_PRODUCT };