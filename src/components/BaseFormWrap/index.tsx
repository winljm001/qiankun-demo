import { ButtonProps } from 'antd';
import React from 'react';
interface ButtonConfig extends ButtonProps {
  show?: boolean | (() => boolean);
  render?: (ButtonNode: React.ReactNode) => React.ReactNode;
}
interface IProps {
  actions: ButtonConfig[];
}
const FullFormWrap: React.FC<IProps> = ({ actions, children }) => {
  const visibleActions = actions?.filter(({ show = true }) => {
    return typeof show === 'function' ? show() : show;
  });
  return <div>{children}</div>;
};

export default FullFormWrap;
