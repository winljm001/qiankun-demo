import React, { FC } from 'react';
import { Input, InputProps } from 'antd';
import { PasswordProps } from 'antd/lib/input';

export type InputControlProps = InputProps | PasswordProps;

const InputControl: FC<InputControlProps> = (props) => {
  const { type, ...restProps } = props;
  switch (type) {
    case 'password':
      return <Input.Password {...restProps} />;
    default:
      return <Input {...props} />;
  }
};

export default InputControl;
