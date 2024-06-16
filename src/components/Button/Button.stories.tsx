import {Meta, type StoryObj} from '@storybook/react';

import Button from '../Button/Button';
import {ButtonDesign} from "./constants.ts";

const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    design: ButtonDesign.Outline,
    label: 'Knopka',
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    design: ButtonDesign.Success,
    label: 'Knopka',
  },
};
Success.storyName = 'Success';

export const Outline: Story = {
  args: {
    design: ButtonDesign.Outline,
    label: 'Knopka',
  },
};
Outline.storyName = 'Outline';
