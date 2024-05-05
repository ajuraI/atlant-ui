import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';
import { ButtonDesign } from "./constants.ts";
import './styles.scss';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    design: {
      control: 'inline-radio',
      options: Object.values(ButtonDesign),
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    design: ButtonDesign.Success,
    fullWidth: false,
  },
};
