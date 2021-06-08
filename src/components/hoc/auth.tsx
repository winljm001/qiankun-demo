import React, { useEffect, useState } from 'react';
import Loading from '@/components/loading';
import useGlobalStore, { name as globalStoreName } from '@/stores/global';
import { Modal } from 'antd';
import { useHistory } from 'react-router';

function auth<T extends object>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const { isAuthReady } = useGlobalStore();
    const [noLogin, setNoLogin] = useState(false);
    const history = useHistory()
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem(globalStoreName))?.state?.token;
      if (!token) {
        setNoLogin(true);
        Modal.info({
          title: '系统提示',
          content: '您尚未登录',
          okText: '知道了',
          onOk() {
            history.push('/login')
          },
        });
      }
    }, []);
    if (noLogin) {
      return null;
    }
    if (!isAuthReady) {
      return <Loading />;
    }
    return <Component {...props} />;
  };
}

export default auth;
