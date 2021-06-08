import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, Cascader } from 'antd';
import { listUnitOptions } from '@/services/commodityService/mods/commoditySku/listUnitOptions'
const { Option } = Select;

import styles from './style.module.less'


const Index: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const [loading, setLoading] = useState(false)
    const [options1, setOptions1] = useState([])
    // const [options2, setOptions2] = useState([])

    const [form] = Form.useForm();

    useEffect(() => {
        listUnitOptions({ commodityTypeId: 2 })
            .then((res) => {
                const data = res.data
                console.log(data);
                // const data1 = [{ label: "g", value: 7, selected: false }, { label: "kg", value: 8, selected: false }]
                setOptions1(data)

            }).catch((err) => {
                console.log(err);
            })
    }, [])


    const onOk = () => {
        form
            .validateFields()
            .then((values) => {
                console.log(values);


                form.resetFields()
                setVisible(false)
            })
            .catch((err) => {
                setLoading(true)
                // console.log('Validate Failed:', info);
            });
    }


    // const options = [
    //     {
    //         value: '11',
    //         label: 'Zhejiang',
    //     },
    // ];
    // okText="保存"
    // cancelText = "取消"
    // onClick = { handleCancel }
    // loading={loading} onClick={handleOk}
    return (
        <Modal title="编辑sku" centered visible={visible} width={640}
            footer={[
                <Button key="back" disabled={loading} onClick={() => setVisible(false)} >
                    取消
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={onOk} >
                    保存
                </Button>
            ]}
        >
            <Form form={form} initialValues={{ remember: true }} name="basic" className={styles.formBox}>
                {/* 一 */}
                <Form.Item label="最小单位" name="minCompany" rules={[{ required: true, message: '请选择单位!' }]} className={styles.company}>
                    <Cascader style={{ width: '70%' }} options={options1} placeholder="请选择" />
                </Form.Item>

                {/* 二 */}
                <Form.Item label="副单位" name="copyCompany" rules={[{ required: true, message: '请选择单位!' }]} className={styles.copyCompany}>
                    <Cascader style={{ width: '70%' }} options={options1} placeholder="请选择" />
                </Form.Item>

                {/* 三 */}
                <Form.Item label="换算比率:" name="ratio" rules={[{ required: true, message: '请填写换算比率!' }]} className={styles.ratio}>
                    <Input addonBefore="一件=" suffix="个" />
                </Form.Item>

            </Form >
        </Modal >
    );
};

export default Index