import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Form, Input, Select, FormInstance, Switch } from 'antd';
import { listUnitOptions } from '@/services/commodityService/mods/commoditySku/listUnitOptions';
import styles from './style.module.less';
import { useForm } from '@/components/JsonForm';
import { FormRef } from '../../index'

type IProps = {
  ref: React.Ref<FormRef>
  initialValues: defs.commodityService.SkuDetails
};

const FoodForm: React.FC<IProps> = React.forwardRef(({ initialValues }, ref) => {
  const [skuUnitOptions, setSkuUnitOptions] = useState([]);
  const [ form ] = useForm()
  useImperativeHandle(ref, () => ({
    form,
  }))
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
      <Form.Item label="状态" name="status" valuePropName="checked">
        <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={true} />
      </Form.Item>
    </Form>
  );
});

export default FoodForm;
