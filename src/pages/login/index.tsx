import React from 'react'
import { useCountDown, useMount } from 'ahooks'
import { Button, Form, Input, message } from 'antd'
import { SafetyOutlined, TabletOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import useGlobalStore from '@/stores/global'
import { BASE_PATH } from '@/router/config/path'
import config from '@/config'
import { history } from '@/router'
import storage from '@/utils/storage'
import {
  useGetCurrentUserQuery,
  useLoginMutation,
  useSendCodeMsgMutation,
} from '@/graphql/operations/__generated__/login'
import img from './images/logo.png'
import styles from './style.module.less'

const Login: React.FC = () => {
  // 创建 loading 实现加载
  const [, setTargetDate, formattedRes] = useCountDown()
  const [sendCodeMsg, { loading: sendCoding }] = useSendCodeMsgMutation()
  const [login, { loading: loginLoading }] = useLoginMutation()
  const { loading: getUserLoading, refetch: refetchGetCurrentUser } = useGetCurrentUserQuery({
    skip: true,
  })

  const { seconds } = formattedRes
  // Form 实例化
  const [form] = Form.useForm()
  const { logout } = useGlobalStore()

  useMount(() => {
    logout()
  })

  // 登录按钮提交
  const onFinish = (values) => {
    login({
      variables: {
        input: {
          phone: values?.phone,
          code: values?.code,
        },
      },
    }).then(async (res) => {
      // 本地存入token
      storage.setItem(config.authKey, String(res.data?.login))
      refetchGetCurrentUser().then(({ data }) => {
        if (data.getCurrentUser.userName && data.getCurrentUser.organizationName) {
          useGlobalStore.setState({
            userInfo: {
              /** 用户名 */
              username: data.getCurrentUser.userName,
              /** 公司名 */
              orgName: data.getCurrentUser.organizationName,
            },
          })
          history.replace(BASE_PATH)
        } else {
          message.error('当前账号有问题，请联系管理员')
        }
      })
    })
  }

  const sendCode = () => {
    const phone = form.getFieldValue('phone')
    sendCodeMsg({
      variables: {
        input: {
          phone,
        },
      },
    }).then(() => {
      setTargetDate(dayjs().add(60, 'seconds').toDate())
      message.success('验证码已发送，请注意查收')
    })
  }

  /** 今年的年份 */
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.login}>
      <div className={styles.bg}>
        <div className={styles.text}>
          <p className={styles.textCh}>全球水果链，共享幸福果</p>
          <p className={styles.textEn}>
            WITH GLOBAL FRUIT CHAIN,
            <br /> WE SHARE THE FRUIT OF HAPPINESS.
          </p>
        </div>
      </div>
      <div className={styles.loginBox}>
        <img src={img} alt="洪九星桥生产运营平台" className={styles.logo} />
        <div className={styles.title}>洪九星桥生产运营平台</div>
        <div className={styles.formBox}>
          <Form form={form} name="basic" initialValues={{ phone: '' }} onFinish={onFinish}>
            {/* 用户 */}
            <Form.Item
              name="phone"
              className={styles.formInput}
              rules={[{ required: true, message: '请输入登录账号!' }]}>
              <Input className={styles.inputUser} placeholder="请输入登录账号" prefix={<TabletOutlined />} />
            </Form.Item>

            {/* 验证码、按钮 */}
            <Form.Item shouldUpdate>
              {({ getFieldValue }) => {
                return (
                  <Form.Item className={styles.formInputB}>
                    <Form.Item name="code" rules={[{ required: true, message: '请输入验证码!' }]}>
                      <Input className={styles.inputPassword} placeholder="请输入验证码" prefix={<SafetyOutlined />} />
                    </Form.Item>
                    <Button
                      onClick={sendCode}
                      disabled={!!seconds || !getFieldValue('phone')}
                      loading={sendCoding}
                      className={styles.btn}>
                      {seconds ? `${seconds}s` : '获取验证码'}
                    </Button>
                  </Form.Item>
                )
              }}
            </Form.Item>

            {/* 登录 */}
            <Form.Item shouldUpdate>
              {({ getFieldError, getFieldValue }) => {
                let disabled = true
                const userErr = getFieldError('phone')
                const userValue = getFieldValue('phone')
                const codeErr = getFieldError('code')
                const codeValue = getFieldValue('code')
                if (userErr[0] || codeErr[0]) {
                  disabled = true
                } else if (!userValue || !codeValue) {
                  disabled = true
                } else {
                  disabled = false
                }
                return (
                  <Form.Item>
                    <Button
                      loading={loginLoading || getUserLoading}
                      disabled={disabled}
                      block
                      className={styles.btnB}
                      type="primary"
                      htmlType="submit">
                      登录
                    </Button>
                  </Form.Item>
                )
              }}
            </Form.Item>
          </Form>
        </div>
        <div className={styles.record}>&copy; 1987-{currentYear} 重庆洪九果品股份有限公司 渝ICP备19002690号-7</div>
      </div>
    </div>
  )
}

export default Login
