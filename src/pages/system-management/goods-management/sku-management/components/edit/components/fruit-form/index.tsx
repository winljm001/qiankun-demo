import React, { useState, useEffect, useImperativeHandle, Ref } from 'react';
import { Switch, Form, Input, Select } from 'antd';
import { listUnitOptions } from '@/services/commodityService/mods/commoditySku/listUnitOptions';
const { Option } = Select;
import styles from './style.module.less';
import { useForm } from 'antd/lib/form/Form';
import { FormRef } from '../../index';

type IProps = {
  initialValues: defs.commodityService.SkuDetails;
};

const FruitForm = React.forwardRef<FormRef, IProps>(({ initialValues }, ref) => {
  const [skuUnitOptions, setSkuUnitOptions] = useState([]);
  const [weightArr, setWeightArr] = useState([]);
  const [form] = useForm();
  const [isTrue, setIsTrue] = useState(true);
  useImperativeHandle(ref, () => ({
    form,
  }));
  // 生命周期请求数据
  useEffect(() => {
    listUnitOptions({ commodityTypeId: 5 })
      .then((res) => {
        const data = res.data;
        setWeightArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
    listUnitOptions({ commodityTypeId: 1 })
      .then((res) => {
        const data = res.data;
        setSkuUnitOptions(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const selectAfter = (
    <Form.Item
      name="unitType"
      className={styles.select_after}
      rules={[{ required: true, message: '请选择sku净重单位!' }]}>
      <Select placeholder="单位" style={{ width: 80 }}>
        {weightArr.map((item) => {
          return (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  return (
    <Form form={form} name="basic" initialValues={{ status: true, ...initialValues }} className={styles.formBox}>
      <Form.Item
        label="sku净重"
        name="unitQuantity"
        rules={[{ required: true, message: '请输入净重!' }]}
        className={styles.weight}>
        <Input addonAfter={selectAfter} />
      </Form.Item>
      <Form.Item label="sku单位" name="totalType" rules={[{ required: true, message: '请选择单位!' }]}>
        <Select options={skuUnitOptions} placeholder="请选择" />
      </Form.Item>
      <Form.Item label="状态" name="status" valuePropName="checked" className={styles.switch}>
        <Switch checkedChildren="开启" unCheckedChildren="关闭" />
      </Form.Item>
    </Form>
  );
});

export default FruitForm;
