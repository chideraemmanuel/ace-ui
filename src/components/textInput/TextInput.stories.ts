import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta = {
  title: 'Components/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Base: Story = {
  args: {},
};
