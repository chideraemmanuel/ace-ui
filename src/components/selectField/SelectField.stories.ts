import type { Meta, StoryObj } from '@storybook/react';
import SelectField from './SelectField';

const meta = {
  title: 'Components/Select Field',
  component: SelectField,
  parameters: {
    layout: 'centered',
    // controls: {
    //   include: Object.keys(IconTextProps),
    // },
  },
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Base: Story = {
  args: {
    // placeholder: 'Select user',
  },
};
