import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import './Link.styles.scss';

const meta = {
  component: Link,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { text: 'google', to: 'https://google.com/', fullWidth: false },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
