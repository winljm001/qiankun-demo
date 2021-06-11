import React, { useEffect } from 'react';
import Loading from '@/components/loading';
import useGlobalStore, { name as globalStoreName } from '@/stores/global';
import { Modal } from 'antd';
import { useHistory } from 'react-router';

function auth<T extends object>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const { authStatus } = useGlobalStore();
    const history = useHistory();
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem(globalStoreName))?.state?.token;
      if (!token) {
        Modal.info({
          title: '系统提示',
          content: '您尚未登录',
          okText: '知道了',
          onOk() {
            history.push('/login');
          },
        });
      }
    }, []);
    if (authStatus === 'fail') {
      return null;
    }
    if (authStatus === 'ok') {
      return <Component {...props} />;
    }
    return <Loading />;
  };
}

export default auth;
