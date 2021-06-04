import React, { FC } from 'react';
import header_logo from '@/images/header_logo.png';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styles from './index.module.less';

interface IProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void
}

const AppHeader: FC<IProps> = ({ collapsed, setCollapsed }) => {
  const a = Math.random()
  const CollapseIcon = a > 0.5 ? MenuUnfoldOutlined : MenuFoldOutlined;
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <img src={header_logo} />
        <div className={styles.name}>星桥分拣管理系统</div>
        <CollapseIcon onClick={() => {
          setCollapsed(!collapsed)
        }} className={styles.collapseIcon} />
      </div>
      <div className={styles.right}>
        <span className={styles.corpName}>洪九果品重庆分公司</span>
        <img src={header_logo} />
        <span className={styles.userName}>用户名</span>
      </div>
    </div>
  );
};

export default AppHeader;
