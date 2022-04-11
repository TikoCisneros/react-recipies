import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './ProductCard';
import { IProduct } from '../../models/Product';

export const FAKE_PRODUCT: IProduct = {
  id: 1,
  title: 'Mens Casual Premium Slim Jacket',
  image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  price: 109.95
}

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = { data: FAKE_PRODUCT };