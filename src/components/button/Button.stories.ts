import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Button',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

// export const Medium: Story = {
//   args: {
//     size: 'medium',
//   },
// };

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const XXLarge: Story = {
  args: {
    size: '2xl',
  },
};

// import type { Meta, StoryObj } from '@storybook/react';

// import Button from './Button';

// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {

//   },
// };
