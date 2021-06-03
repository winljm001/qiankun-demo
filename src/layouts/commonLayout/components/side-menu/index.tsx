import React, { memo } from 'react';
import { Menu, MenuProps } from 'antd';
import styles from './style.module.less';
import { Link } from 'react-router-dom';
import { CustomRouteConfig } from '@/router/config';

interface IProps extends MenuProps {
  menuList: CustomRouteConfig[];
}

const SideMenu: React.FC<IProps> = React.memo(({ menuList, defaultOpenKeys, defaultSelectedKeys, ...restProps }) => {
  const renderMenu = (menuConfig: CustomRouteConfig[]) => {
    return menuConfig?.map((menu) => {
      const menuText = menu.meta?.menuText;
      const subRoutes = menu.routes;
      if (subRoutes?.length > 0) {
        return (
          <Menu.SubMenu title={menuText} key={menuText}>
            {/* recursive traversal */}
            {renderMenu(subRoutes)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={menuText}>
          {/* path maybe an array! */}
          <Link to={Array.isArray(menu.path) ? menu.path[0] : menu.path}>{menuText}</Link>
        </Menu.Item>
      );
    });
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      {...restProps}
      className={styles.sideMenu}>
      {renderMenu(menuList)}
    </Menu>
  );
});
export default memo(SideMenu);
