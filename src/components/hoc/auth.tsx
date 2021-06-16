import React, { useEffect } from 'react';
import Loading from '@/components/loading';
import useGlobalStore, { name as globalStoreName } from '@/stores/global';
import { useHistory } from 'react-router';

function auth<T extends object>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const { authStatus } = useGlobalStore();
    const history = useHistory();
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem(globalStoreName))?.state?.token;
      if (!token) {
        history.replace('/login');
      }
    }, []);
    if (authStatus === null || authStatus === 'fail') {
      return null;
    }
    if (authStatus === 'ok') {
      return <Component {...props} />;
    }
    return <Loading />;
  };
}

export default auth;
