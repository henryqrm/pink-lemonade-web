import React, { useState, useEffect } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Notification/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const Indeterminate = Template.bind({});

Indeterminate.args = {
  label: 'Analisando dados',
};

export const Determinate = () => {
  const [progress, setProgress] = useState<number>(0);
  const [color, setColor] = useState(null);
  const [label, setLabel] = useState<string>('Analisando dados');
  useEffect(() => {
    const id = setInterval(() => {
      if (progress === 100) {
        setColor({
          line: '#f3fcf6',
          subline: '#19bd54',
        });
        setLabel('Dados enviados com sucesso');
        return clearInterval(id);
      }
      setProgress(progress + 1);
    }, 100);
    return () => clearInterval(id);
  }, [progress]);
  return (
    <ProgressBar
      variant="determinate"
      value={progress}
      label={label}
      color={color}
    />
  );
};

export const CustomColor = () => (
  <ProgressBar
    label="Analisando dados"
    color={{ line: '#fffcf4', subline: '#fec01a' }}
  />
);
