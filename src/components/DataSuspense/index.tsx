import React from 'react';
import { Spin, Empty } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface IProps {
  loading: boolean;
  error: boolean;
  errorImage?: React.ReactNode;
  errorText?: string;
  children: () => React.ReactNode;
}

const DataSuspense: React.FC<IProps> = ({
  loading,
  error,
  errorImage = Empty.PRESENTED_IMAGE_SIMPLE,
  errorText = '暂无数据',
  children,
}) => {
  if (loading) {
    return (
      <div style={{ height: '100%', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
      </div>
    );
  }
  if (error) {
    return <Empty image={errorImage} description={errorText} />;
  }
  return <>{children()}</>;
};

export default DataSuspense;
