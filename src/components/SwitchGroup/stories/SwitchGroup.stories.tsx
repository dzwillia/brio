import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitchGroup } from '../src/SwitchGroup';
import type { SwitchGroupProps } from '../types';

const options = [
  { id: 'notifications', label: 'Enable notifications' },
  { id: 'emails', label: 'Receive emails' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'updates', label: 'Auto-updates' },
];

const meta = {
  title: 'Components/SwitchGroup',
  component: SwitchGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Array of selected switch IDs',
      type: { name: 'array', required: false },
    },
    onChange: {
      description: 'Callback when selection changes',
      type: { name: 'function', required: true },
    },
    options: {
      control: 'object',
      description: 'Array of switch options',
      type: { name: 'array', required: true },
    },
    columns: {
      control: 'radio',
      options: [1, 2, 3, 4],
      description: 'Number of columns in the grid',
      type: { name: 'number', required: false },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const SwitchGroupDemo = ({ value: initialValue = [], ...args }: SwitchGroupProps) => {
  const [value, setValue] = useState<string[]>(initialValue);
  return (
    <div className="space-y-4">
      <SwitchGroup {...args} value={value} onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected IDs: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};

export const Default: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 2,
    value: [],
  },
};

export const WithSelection: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    value: ['notifications', 'emails'],
    columns: 2,
  },
};

export const SingleColumn: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 1,
  },
};

export const ThreeColumns: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options,
    columns: 3,
  },
};

export const WithManyOptions: Story = {
  render: args => <SwitchGroupDemo {...args} />,
  args: {
    options: [
      ...options,
      { id: 'backup', label: 'Automatic backup' },
      { id: 'sync', label: 'Cloud sync' },
      { id: 'analytics', label: 'Usage analytics' },
      { id: 'beta', label: 'Beta features' },
    ],
    columns: 2,
  },
};
