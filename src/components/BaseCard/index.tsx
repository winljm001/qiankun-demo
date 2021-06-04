import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import React from 'react';

type BaseCardInterface = CardProps;
const BaseCard: React.FC<BaseCardInterface> = ({ children, ...props }) => {
  return (
    <Card bordered={false} style={{ marginBottom: 16 }} {...props}>
      {children}
    </Card>
  );
};

export default BaseCard;
