import useGlobalStore from '@/stores/global';
import { useMount, useCountDown } from 'ahooks';
import { Button, Checkbox, message, Form, Input } from 'antd';
import { SafetyOutlined, TabletOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '@/services/userService/mods/userWeb/login'
import { sendCheckCode } from '@/services/userService/mods/userWeb/sendCheckCode'
import img from './images/logo.png'

import styles from './style.module.less'

const Index: React.FC = () => {

  // const isLogin = useGlobalStore(state => state.isLogin)
  useEffect(() => {
    console.log(useGlobalStore.getState().token);

  })

  // 创建倒计时ahook
  const [countdown, setTargetDate] = useCountDown();

  // Form实例化
  const [FormInstance]: any = Form.useForm()

  // 获取验证码
  const toastVerificationCode = () => {
    // 取手机号码
    const phoneNum1 = FormInstance.getFieldValue('username')
    sendCheckCode({
      queryParams: {
        phoneNum: String(phoneNum1)
      }
    }).then(res => {
      message.success('获取验证码成功！')
    }).catch(err => {
      console.log(err);
    })
  }



  const history = useHistory();
  const { logout } = useGlobalStore();
  useMount(() => {
    logout();
  });
  const onFinish = (values: any) => {
    login({
      bodyParams: {
        /** 短信验证码 */
        checkCode: values.text,
        /** 用户电话号码 */
        phoneNum: values.username
      }
    }).then(res => {
      message.success('登陆成功！')
      console.log(res);
      history.push('/');
    }).catch(err => {
      console.log(err);

    })
    // 登录逻辑

    // console.log('Success:', values);
  };


  return (
    <div className={styles.login}>
      <div className={styles.bg}>
        <div className={styles.text}>
          <p className={styles.textCh}>全球水果链，共享幸福果</p>
          <p className={styles.textEn}>WITH GLOBAL FRUIT CHAIN,<br /> WE SHARE THE FRUIT OF HAPPINESS.</p>
        </div>
      </div>
      <div className={styles.loginBox}>
        <img src={img} alt="" className={styles.logo} />
        <div className={styles.title}>星桥分拣管理系统</div>

        <div className={styles.formBox}>

          <Form form={FormInstance} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>

            {/* 用户 */}
            <Form.Item name="username" className={styles.formInput} rules={[{ required: true, message: '请输入手机号！' },
            { pattern: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/, message: '请输入11位正确电话号码!' }]}>
              <Input className={styles.inputUser} placeholder="请输入手机号" prefix={<TabletOutlined />} />
            </Form.Item>

            {/* 验证码、按钮 */}
            <Form.Item shouldUpdate>
              {({ getFieldValue, getFieldError }) => {
                let codeFlag = true
                let userError = getFieldError('username')[0]
                if (userError || !getFieldValue('username')) {
                  codeFlag = true
                } else {
                  codeFlag = false
                }
                return <Form.Item className={styles.formInputB}>
                  <Form.Item name="text" rules={[{ min: 6, max: 6, message: '请输入6位验证码' }, { required: true, message: '输入验证码' }]}>
                    <Input className={styles.inputPassword} placeholder="请输入验证码" prefix={<SafetyOutlined />} />
                  </Form.Item>
                  <Button onClick={() => {
                    toastVerificationCode()
                    setTargetDate(Date.now() + 5000);
                  }} disabled={codeFlag || countdown !== 0} className={styles.btn}>{countdown === 0 ? '获取验证码' : `${Math.round(countdown / 1000)}s`}</Button>
                </Form.Item>
              }}
            </Form.Item>

            {/* 登录 */}
            <Form.Item shouldUpdate>
              {({ getFieldError, getFieldValue }) => {
                let disabled = true
                const userErr = getFieldError('username')
                const userValue = getFieldValue('username')
                const codeErr = getFieldError('text')
                const codeValue = getFieldValue('text')
                if (userErr[0] || codeErr[0]) {
                  disabled = true

                } else if (!userValue || !codeValue) {
                  disabled = true
                } else {
                  disabled = false
                }
                return (<Form.Item>
                  <Button disabled={disabled} block className={styles.btnB} type="primary" htmlType="submit">
                    登录
              </Button>
                </Form.Item>)
              }}
            </Form.Item>


          </Form>
        </div>
        <div className={styles.record}>© 169 1987-2021 重庆洪九果品股份有限公司 渝ICP备19002690号-7</div>
      </div>
    </div>
  );
};

export default Index;
