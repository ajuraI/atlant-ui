import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';
import './Container.styles.scss';

const meta = {
  component: Container,
  tags: ['autodocs'],
  args: { children: <div style={{ width: '100%', height: '160px', backgroundColor: 'lightgray' }} /> },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
