import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import './styles.scss';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { label: 'Введите текст', placeholder: 'Какой то текст' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
