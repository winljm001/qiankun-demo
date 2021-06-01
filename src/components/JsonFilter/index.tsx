import React, { useEffect } from 'react'
import { Form, Button, Row, Col } from 'antd'
import { FormInstance } from 'antd/lib/form/hooks/useForm'
import { FormProps, FormItemProps } from 'antd/lib/form'
import { ButtonProps } from 'antd/lib/button/button'
import { get as _get } from 'lodash'
import Space from '@/components/Space'
import InputControl, { InputControlProps } from '@/components/JsonForm/controls/InputControl'
import SelectControl, { SelectControlProps } from '@/components/JsonForm/controls/SelectControl'
import RemoteSelectControl, { RemoteSelectControlProps } from '@/components/JsonForm/controls/RemoteSelectControl'
import TreeSelectControl, { TreeSelectControlProps } from '@/components/JsonForm/controls/TreeSelectControl'
import DatePickerControl, { DatePickerControlConfig } from '@/components/JsonForm/controls/DatePickerControl'
import { listSearchFromItemProps } from '@/config/defaultSettings'

// 输入框
type InputControlConfig = {
  controlType: 'INPUT'
} & InputControlProps
// 下拉框
type SelectControlConfig = {
  controlType: 'SELECT'
} & SelectControlProps
// 远程数据下拉框
type RemoteSelectControlConfig = {
  controlType: 'REMOTE_SELECT'
} & RemoteSelectControlProps
// 树形下拉选项控件
type TreeSelectConfig = {
  controlType: 'TREE_SELECT'
} & TreeSelectControlProps
// 时间选择控件
type DatePickerConfig = {
  controlType: 'DATE'
} & DatePickerControlConfig
// 自定义控件
interface CustomControlConfig {
  controlType: 'CUSTOM'
  render: () => React.ReactElement
}
// 表单控件
type ControlConfig =
  | InputControlConfig
  | SelectControlConfig
  | RemoteSelectControlConfig
  | TreeSelectConfig
  | DatePickerConfig
  | CustomControlConfig
// 表单项
interface FormItemObjectConfig extends FormItemProps {
  key: React.Key
  excluded?: boolean
  control?: ControlConfig
  customRender?: (form: FormInstance) => React.ReactNode
}
interface AnyObject {
  [prop: string]: any
}
// 按钮项
export type FormItemConfig = FormItemObjectConfig | (() => FormItemObjectConfig)
export interface FormConfig<Values = AnyObject> extends Omit<FormProps, 'form' | 'initialValues'> {
  // 表单项列表
  formItems: FormItemConfig[]
  // 底部按钮组
  actions?: ButtonProps[]
  // 表单数据
  fieldsData: Partial<Values>
  // 表单创建生命周期
  onCreated?: (filter: FormInstance) => void
  // 筛选事件
  onFilter?: (values: Values) => void
}
/**
 * 获取可执行数据类型的返回值
 * @param executableData 可执行数据
 * @returns 返回数据
 */
function callableDataReturn<T>(executableData: T | (() => T)): T {
  switch (typeof executableData) {
    case 'function':
      return (executableData as () => T)()
    default:
      return executableData
  }
}
function JsonFilter<Values>({ formItems, actions, fieldsData, onCreated, onFilter, style = {}, ...formProps }: FormConfig<Values>) {
  // 创建表单实例
  const form = Form.useForm<Values>()[0]
  useEffect(() => {
    onCreated?.(form)
  }, [])
  // 生成表单字段（强制受控）
  const fields = formItems.map(formItem => {
    const { name } = callableDataReturn(formItem)
    return {
      name,
      value: _get(fieldsData, name),
    }
  })
  /**
   * 渲染控件
   * @param config 控件配置
   */
  const renderControl = (config: ControlConfig) => {
    const { controlType, ...controlConfig } = config
    switch (controlType) {
      case 'INPUT':
        return <InputControl {...(controlConfig as InputControlProps)} />
      case 'SELECT':
        return <SelectControl {...(controlConfig as SelectControlProps)} />
      case 'REMOTE_SELECT':
        return <RemoteSelectControl {...(controlConfig as RemoteSelectControlProps)} />
      case 'TREE_SELECT':
        return <TreeSelectControl {...(controlConfig as TreeSelectControlProps)} />
      case 'DATE':
        return <DatePickerControl {...(config as DatePickerControlConfig)} />
      case 'CUSTOM':
        return (config as CustomControlConfig).render()
      default:
        throw new Error(`unkown controlType: ${controlType}`)
    }
  }
  /**
   * 渲染表单项目
   * @param formItemConfig 表单项配置
   * @returns 表单
   */
  const renderFormItem = (formItemConfig: FormItemObjectConfig) => {
    const { label, control, ...formItemProps } = formItemConfig
    delete formItemProps.excluded
    delete formItemProps.shouldUpdate
    delete formItemProps.customRender
    delete formItemProps.key
    return (
      <Form.Item label={label} {...formItemProps}>
        {renderControl(control)}
      </Form.Item>
    )
  }
  /**
   * 处理表单项渲染逻辑
   * @param formItem 表单项配置
   * @returns
   */
  const handleFormItemRenderLogic = (formItem: FormItemConfig) => {
    const formItemConfig = callableDataReturn(formItem)
    const { shouldUpdate, customRender, excluded, key } = formItemConfig
    if (customRender) {
      return customRender(form)
    }
    if (shouldUpdate) {
      return (
        <Col key={key} {...listSearchFromItemProps.colProps}>
          <Form.Item shouldUpdate={shouldUpdate} noStyle>
            {() => {
              const formItemConfig = callableDataReturn(formItem)
              if (formItemConfig.excluded) return null
              return renderFormItem(formItemConfig)
            }}
          </Form.Item>
        </Col>
      )
    }
    if (excluded) return null
    return (
      <Col key={key} {...listSearchFromItemProps.colProps}>
        {renderFormItem(formItemConfig)}
      </Col>
    )
  }
  /**
   * 表单提交事件
   * @param values 表单数据
   */
  const onFormFinish = (values: Values) => {
    onFilter?.(values)
  }
  // 合成表单用户props
  const formPropsResult = {fields, ...formProps}
  // 默认操作项
  let defaultActions: ButtonProps[] = [
    {
      type: 'primary',
      children: '查询',
      htmlType: 'submit',
    },
    {
      type: 'default',
      children: '重置',
      onClick() {
        form.resetFields()
        form.submit()
      },
    },
  ]
  // 根据表单项col props设置按钮组col props
  return (
    <Form style={{ marginBottom: -24, ...style }} {...formPropsResult} form={form} onFinish={onFormFinish}>
      <Row {...listSearchFromItemProps.rowProps}>
        {/* 控件列表 */}
        {formItems.map(handleFormItemRenderLogic)}
        {/* 按钮组 */}
        {(actions || defaultActions).length > 0 && (
          <Col>
            <Form.Item>
              <Space display="inline" size={24}>
                {(actions || defaultActions).map(({ children, ...props }, index) => {
                  return (
                    <Button key={index} {...props}>
                      {children}
                    </Button>
                  )
                })}
              </Space>
            </Form.Item>
          </Col>
        )}
      </Row>
    </Form>
  )
}

export const defineConfig = <Values extends AnyObject>(config: FormConfig<Values>) => config
export default JsonFilter
