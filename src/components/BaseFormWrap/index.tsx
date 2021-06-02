import { Button, ButtonProps } from 'antd';
import React from 'react';
import styles from './index.module.less';
interface ButtonConfig extends ButtonProps {
  show?: boolean | (() => boolean);
  render?: (ButtonNode: React.ReactNode) => React.ReactNode;
}
interface IProps {
  actions: ButtonConfig[];
}
const BaseFormWrap: React.FC<IProps> = (props) => {
  const { actions } = props;
  const visibleActions = actions?.filter(({ show = true }) => {
    return typeof show === 'function' ? show() : show;
  });
  return (
    <div className={styles.baseFormWrap}>
      <div className={styles.baseFormBody}>{props?.children}</div>
      <div className={styles.baseFormBottom}>
        {visibleActions?.map((item, index) => {
          const { type = 'default', size = 'large', render, children, ...restProps } = item;
          delete restProps.show;
          return render ? (
            render?.(children)
          ) : (
            <Button type={type} size={size} key={index} {...restProps}>
              {children}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BaseFormWrap;
