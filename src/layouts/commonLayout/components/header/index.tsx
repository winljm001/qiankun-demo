import React, { FC } from 'react';
import header_logo from '@/images/header_logo.png';
import { Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { State } from '@/stores/global';
import styles from './index.module.less';
import { useHistory } from 'react-router';

type IProps = Pick<State, 'logout' | 'userInfo' | 'collapsed' | 'setCollapsed'>;

const AppHeader: FC<IProps> = ({ userInfo, logout, collapsed, setCollapsed }) => {
  const CollapseIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  const history = useHistory()
  const routeToLogin = () => {
    location.href = '/login'
  }
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          logout(routeToLogin)
        }}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <img src={header_logo} />
        <div className={styles.name}>星桥分拣管理系统</div>
        <CollapseIcon
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className={styles.collapseIcon}
        />
      </div>
      <div className={styles.right}>
        <span className={styles.corpName}>{userInfo?.companyName}</span>
        <img src={header_logo} />
        <Dropdown overlay={menu} trigger={['click']}>
          <span className={styles.userName}>{userInfo?.username}</span>
        </Dropdown>
      </div>
    </div>
  );
};

export default AppHeader;
