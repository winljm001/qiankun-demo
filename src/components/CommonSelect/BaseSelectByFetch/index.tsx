import { Select, SelectProps } from 'antd';
import { useControllableValue } from 'ahooks';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
const { Option } = Select;
interface IProps extends SelectProps<any> {
  remote?: {
    fetch: (val: any) => Promise<any>;
    params?: any;
    normalize?: (val: any) => void;
    onFetched?: (obj: any) => void;
  };
  noDisable?: any;
  hasAny?: any;
  value?: any;
  onChange?: (obj: any) => void;
}
const BaseSelectByFetch: React.FC<IProps> = ({
  value,
  hasAny = false,
  remote,
  noDisable = false,
  onChange,
  ...props
}) => {
  const { fetch, normalize, params, onFetched } = remote;
  const [state, setState] = useControllableValue<string>(props, {
    defaultValue: value,
  });
  const [uid] = useState(Date.now());
  // 这里的key应该是有问题
  const { data, isLoading } = useQuery([`BaseSelectByFetch${uid}`, params], () => {
    return fetch(params).then((res) => {
      const list = normalize ? normalize(res?.data) : res?.data;
      onFetched?.(list);
      const item = list?.find((v) => {
        return state === v?.value;
      });
      if (!item) {
        setState('');
      }
      return list;
    });
  });
  return (
    <Select
      loading={isLoading}
      value={state}
      onChange={(v) => {
        setState(v);
        onChange?.(v);
      }}
      {...props}>
      {hasAny ? <Option value="">全部</Option> : null}
      {data
        ?.sort((prev, next) => {
          if (prev.disabled && !next.disabled) {
            return 1;
          } else if (!prev.disabled && next.disabled) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((v, i) => {
          return (
            <Option label={v.label} value={v.value} key={i} disabled={noDisable ? false : v?.disabled}>
              {v.label}
            </Option>
          );
        })}
    </Select>
  );
};
export default BaseSelectByFetch;
