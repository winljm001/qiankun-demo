import React, { useState, useEffect } from 'react';
import { Form, Input, Select, FormInstance } from 'antd';
import { listUnitOptions } from '@/services/commodityService/mods/commoditySku/listUnitOptions';
import styles from './style.module.less';

type IProps = {
  form: FormInstance
  initialValues: defs.commodityService.SkuDetails
};

const FoodForm: React.FC<IProps> = ({ form, initialValues }) => {
  const [skuUnitOptions, setSkuUnitOptions] = useState([]);

  useEffect(() => {
    listUnitOptions({ commodityTypeId: 2 })
      .then((res) => {
        const data = res.data;
        setSkuUnitOptions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Form form={form} initialValues={initialValues} name="basic" className={styles.formBox}>
      <Form.Item
        label="最小单位"
        name="unitType"
        rules={[{ required: true, message: '请选择单位!' }]}
        className={styles.company}>
        <Select style={{ width: '70%' }} options={skuUnitOptions} placeholder="请选择" />
      </Form.Item>
      <Form.Item
        label="副单位"
        name="totalType"
        rules={[{ required: true, message: '请选择单位!' }]}
        className={styles.copyCompany}>
        <Select style={{ width: '70%' }} options={skuUnitOptions} placeholder="请选择" />
      </Form.Item>
      <Form.Item
        label="换算比率:"
        name="unitQuantity"
        rules={[{ required: true, message: '请填写换算比率!' }]}
        className={styles.ratio}>
        <Input addonBefore="一件=" suffix="个" />
      </Form.Item>
    </Form>
  );
};

export default FoodForm;
