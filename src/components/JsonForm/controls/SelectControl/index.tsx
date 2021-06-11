import React from 'react';
import { Select, SelectProps } from 'antd';

export type SelectControlProps = SelectProps<any>;

const SelectControl: React.FC<SelectControlProps> = (props) => {
  return <Select {...props} />;
};

export default SelectControl;
