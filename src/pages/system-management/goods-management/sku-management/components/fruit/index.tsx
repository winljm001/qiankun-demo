import React, { useState, useEffect } from 'react';
import { Modal, Switch, Form, Button, Input, Select, Cascader } from 'antd';
import { listUnitOptions } from '@/services/commodityService/mods/commoditySku/listUnitOptions'
const { Option } = Select;


import styles from './style.module.less'


const Index: React.FC = () => {
    const [visible, setVisible] = useState(true)
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState([])
    const [weightArr, setweightArr] = useState([])


    // 生命周期请求数据
    useEffect(() => {
        listUnitOptions({ commodityTypeId: 5 })
            .then((res) => {
                const data = res.data
                console.log(data);
                setweightArr(data)
            }).catch((err) => {
                console.log(err);
            })
        listUnitOptions({ commodityTypeId: 1 })
            .then((res) => {
                const data = res.data
                // console.log(data);

                setOptions(data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    // Form实例化
    const [form] = Form.useForm()


    const selectAfter = (
        <Form.Item className={styles.select_after} name='skuCompany'>
            <Select defaultValue="单位" style={{ width: 80 }}  >
                {
                    weightArr.map(item => {
                        return <Option key={item.value} value={`${item.value}`}>{item.label}</Option>
                    })
                }
            </Select>
        </Form.Item>
    )

    // const options = [
    //     {
    //         value: 'zhejiang',
    //         label: 'Zhejiang',
    //         children: [
    //             {
    //                 value: 'hangzhou',
    //                 label: 'Hangzhou',
    //                 children: [
    //                     {
    //                         value: 'xihu',
    //                         label: 'West Lake',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ];
    const onOk = () => {
        form
            .validateFields()
            .then((values) => {
                console.log(values);
                form.resetFields();
                console.log(values);
                setVisible(false)
            })
            .catch((info) => {
                setLoading(true)
                console.log('Validate Failed:', info);
            });
    }

    return (
        <Modal
            okText="保存"
            cancelText="取消"
            title="编辑sku"
            centered
            visible={visible}
            // onOk={onOk}
            // onCancel={() => setVisible(false)}
            width={640}
            footer={[
                <Button key="back" disabled={loading} onClick={() => setVisible(false)} >
                    取消
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={onOk} >
                    保存
                </Button>
            ]}
        >
            <Form form={form} name="basic" className={styles.formBox}>
                {/* 一 */}
                <Form.Item label="sku净重" name="weight" rules={[{ required: true, message: '请输入净重!' }]} className={styles.weight}>
                    <Input addonAfter={selectAfter} />
                </Form.Item>
                {/* 二 */}
                <Form.Item label="sku单位" name="Company" rules={[{ required: true, message: '请选择单位!' }]}>
                    <Cascader style={{ width: '70%' }} options={options} placeholder="请选择" />
                </Form.Item>
                {/* 三 */}
                <Form.Item label="状态" name="switch" valuePropName="checked" className={styles.switch}>
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={true} />
                </Form.Item>

            </Form >
        </Modal >
    );
};

export default Index