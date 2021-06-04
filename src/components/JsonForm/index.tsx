import React, { useEffect } from 'react';
import { Form, Button } from 'antd';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import { FormProps, FormItemProps } from 'antd/lib/form';
import { ButtonProps } from 'antd/lib/button/button';
import { NamePath } from 'rc-field-form/lib/interface';
import { get as _get, set as _set } from 'lodash';
import moment from 'moment';
import Space from '@/components/Space';
import { formControlIndent } from '@/config/defaultSettings';
import TextControl, { TextControlProps } from './controls/TextControl';
import InputControl, { InputControlProps } from './controls/InputControl';
import SelectControl, { SelectControlProps } from './controls/SelectControl';
import RemoteSelectControl, { RemoteSelectControlProps } from './controls/RemoteSelectControl';
import TextAreaControl, { TextAreaControlProps } from './controls/TextAreaControl';
import UploadControl, { UploadControlProps } from './controls/UploadControl';
import RadioGroupControl, { RadioGroupControlProps } from './controls/RadioGroupControl';
import TreeControl, { TreeControlProps } from './controls/TreeControl';
import TreeSelectControl, { TreeSelectControlProps } from './controls/TreeSelectControl';
import DatePickerControl, { DatePickerControlConfig } from './controls/DatePickerControl';
import { fromSingleLayoutProps } from './defaultConfig';

// 纯文本
type TextControlConfig = {
  controlType: 'TEXT';
} & TextControlProps;
// 输入框
type InputControlConfig = {
  controlType: 'INPUT';
} & InputControlProps;
// 下拉框
type SelectControlConfig = {
  controlType: 'SELECT';
} & SelectControlProps;
// 远程数据下拉框
type RemoteSelectControlConfig = {
  controlType: 'REMOTE_SELECT';
} & RemoteSelectControlProps;
// 文本域
type TextAreaControlConfig = {
  controlType: 'TEXTAREA';
} & TextAreaControlProps;
// 文件上传
type UploadControlConfig = {
  controlType: 'UPLOAD';
} & UploadControlProps;
// 单选按钮
type RadioGroupControlConfig = {
  controlType: 'RADIO_GROUP';
} & RadioGroupControlProps;
// 树形控件
type TreeConfig = {
  controlType: 'TREE';
} & TreeControlProps;
// 树形下拉选项控件
type TreeSelectConfig = {
  controlType: 'TREE_SELECT';
} & TreeSelectControlProps;
// 时间选择控件
type DatePickerConfig = {
  controlType: 'DATE';
} & DatePickerControlConfig;
// 自定义控件
interface CustomControlConfig {
  controlType: 'CUSTOM';
  render: () => React.ReactElement;
}
// 表单控件
type ControlConfig =
  | TextControlConfig
  | InputControlConfig
  | SelectControlConfig
  | RemoteSelectControlConfig
  | TextAreaControlConfig
  | UploadControlConfig
  | RadioGroupControlConfig
  | TreeConfig
  | TreeSelectConfig
  | DatePickerConfig
  | CustomControlConfig;
// 表单项
interface FormItemObjectConfig extends FormItemProps {
  excluded?: boolean;
  indent?: number;
  control?: ControlConfig;
  customRender?: (form: FormInstance) => React.ReactNode;
}
// 按钮项
export type ButtonItem = { text: string } & ButtonProps;
export interface ButtonConfig extends FormItemProps {
  indent?: number;
  groups?: ButtonItem[];
}
export type FormItemConfig = FormItemObjectConfig | (() => FormItemObjectConfig);
export interface FormConfig extends FormProps {
  form?: FormInstance;
  onFormCreated?: (form: FormInstance) => void;
  normalize?: (values: any) => any;
  // 表单项列表
  formItems: FormItemConfig[];
  // 底部按钮组
  buttonGroup?: ButtonConfig | (() => ButtonConfig);
}

interface InitialValues {
  [prop: string]: any;
}
const convertDateValue = (values: InitialValues, name: NamePath, control: DatePickerConfig) => {
  const { pickerType } = control;
  let result = null;
  switch (pickerType) {
    case 'DATE': {
      const date = _get(values, name);
      result = date ? moment(date) : null;
      break;
    }
  }
  _set(values, name, result);
};
const convertInitialValues = (values: InitialValues, formItems: FormItemConfig[]) => {
  formItems.forEach((formItem) => {
    const item: FormItemObjectConfig = typeof formItem === 'function' ? formItem() : formItem;
    switch (item.control?.controlType) {
      case 'DATE':
        convertDateValue(values, item.name, item.control);
        break;
    }
  });
};
function callableDataReturn<T>(executableData: T | (() => T)): T {
  switch (typeof executableData) {
    case 'function':
      return (executableData as () => T)();
    default:
      return executableData;
  }
}
const JsonForm: React.FC<FormConfig> = ({
  onFormCreated,
  formItems,
  buttonGroup = {},
  normalize,
  onFinish,
  ...formProps
}) => {
  // 如果开发者未传递form，则自动生成form实例
  const defaultForm = Form.useForm()[0];
  Object.assign(formProps, { form: formProps.form || defaultForm });
  // 转换表单初始值（如时间需moment）
  convertInitialValues(formProps.initialValues, formItems);
  useEffect(() => {
    onFormCreated?.(defaultForm);
  }, []);
  /**
   * 渲染控件
   * @param config 控件配置
   */
  const renderControl = (config: ControlConfig, label?: React.ReactNode) => {
    const { controlType, ...controlConfig } = config;
    switch (controlType) {
      case 'TEXT':
        return <TextControl label={label} {...(controlConfig as TextControlProps)} />;
      case 'INPUT':
        return <InputControl {...(controlConfig as InputControlProps)} />;
      case 'SELECT':
        return <SelectControl {...(controlConfig as SelectControlProps)} />;
      case 'REMOTE_SELECT':
        return <RemoteSelectControl {...(controlConfig as RemoteSelectControlProps)} />;
      case 'TEXTAREA':
        return <TextAreaControl {...(controlConfig as TextAreaControlProps)} />;
      case 'UPLOAD':
        return <UploadControl {...(controlConfig as UploadControlProps)} />;
      case 'RADIO_GROUP':
        return <RadioGroupControl {...(controlConfig as RadioGroupControlProps)} />;
      case 'TREE':
        return <TreeControl {...(controlConfig as TreeControlProps)} />;
      case 'TREE_SELECT':
        return <TreeSelectControl {...(controlConfig as TreeSelectControlProps)} />;
      case 'DATE':
        return <DatePickerControl {...(config as DatePickerControlConfig)} />;
      case 'CUSTOM':
        return (config as CustomControlConfig).render();
      default:
        throw new Error(`unkown controlType: ${controlType}`);
    }
  };

  const renderFormItem = (formItemConfig: FormItemObjectConfig, index: number) => {
    const { indent = formControlIndent, style = {}, label, control, ...formItemProps } = formItemConfig;
    delete formItemProps.excluded;
    delete formItemProps.shouldUpdate;
    delete formItemProps.customRender;
    return (
      <Form.Item
        key={index}
        style={{ padding: `0 ${indent}px`, ...style }}
        label={control?.controlType === 'TEXT' ? '' : label}
        {...formItemProps}>
        {renderControl(control, label)}
      </Form.Item>
    );
  };
  const handleFormItemRenderLogic = (formItem: FormItemConfig, index: number) => {
    const formItemConfig = callableDataReturn(formItem);
    const { shouldUpdate, customRender, excluded } = callableDataReturn(formItem);
    if (customRender) {
      return customRender(formProps.form);
    }
    if (shouldUpdate) {
      return (
        <Form.Item key={index} shouldUpdate={shouldUpdate} noStyle>
          {() => {
            const formItemConfig = callableDataReturn(formItem);
            if (formItemConfig.excluded) return null;
            return renderFormItem(formItemConfig, index);
          }}
        </Form.Item>
      );
    }
    if (excluded) return null;
    return renderFormItem(formItemConfig, index);
  };

  const onFormFinish = (values) => {
    normalize?.(values);
    if (onFinish) {
      onFinish(values);
    }
  };
  const formPropsResult: FormProps = { layout: 'vertical', ...fromSingleLayoutProps, ...formProps };
  // 根据表单项col props设置按钮组col props
  const { indent = formControlIndent, style = {}, groups = [], ...buttonItemProps } = callableDataReturn(buttonGroup);
  return (
    <Form {...formPropsResult} onFinish={onFormFinish}>
      {/* 控件列表 */}
      {formItems.map(handleFormItemRenderLogic)}
      {/* 按钮组 */}
      {groups.length > 0 && (
        <Form.Item style={{ padding: `0 ${indent}px`, ...style }} {...buttonItemProps}>
          <Space display="inline" size={24}>
            {groups.map(({ text, ...props }) => {
              return (
                <Button key={text} {...props}>
                  {text}
                </Button>
              );
            })}
          </Space>
        </Form.Item>
      )}
    </Form>
  );
};

export const useForm = Form.useForm;
export const defineConfig: (config: FormConfig) => FormConfig = (config) => config;
export default JsonForm;
