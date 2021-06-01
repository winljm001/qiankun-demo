import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Layout, Breadcrumb } from 'antd';
import styles from './style.module.less';
import SideMenu from './components/side-menu';
const { Header, Content, Sider } = Layout;

const LayoutComponent: React.FC<RouteConfigComponentProps> = React.memo((props) => {
  const { route } = props;
  return (
    <Layout className={styles.layout}>
      <Header className="header">
        <div className={styles.logo}>洪九管理系统</div>
      </Header>
      <Layout>
        <Sider width={200}>
          <SideMenu />
        </Sider>
        <Layout>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>{renderRoutes(route?.routes)}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
export default LayoutComponent;
