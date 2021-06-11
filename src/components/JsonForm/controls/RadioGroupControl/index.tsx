import React from 'react';
import { Radio, RadioGroupProps } from 'antd';

export type RadioGroupControlProps = RadioGroupProps;

const RadioGroupControl: React.FC<RadioGroupControlProps> = (props) => {
  return <Radio.Group {...props} />;
};

export default RadioGroupControl;
