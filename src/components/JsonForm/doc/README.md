# JsonForm

配置式表单组件，基于 antd Form 组件二次封装。

## 何时使用

页面包含表单操作，详情展示。

## 效果演示

[表单字段需联动](https://durian-test.hjgpscm.com/international_delivery/tax_deposit/edit?id=3045)

**代码**

```tsx
const Edit: React.FC<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const history = useHistory();
  const [form] = useForm();

  const taxPayer = {
    SELF_PAY: '洪九果品',
    WITHHOLD: data.expressCompany,
  };
  const config = defineConfig({
    form,
    initialValues: data,
    ...fromSingleProps,
    formItems: [
      {
        indent: 0,
        control: {
          controlType: 'TEXT',
          text: '纳税信息',
          render: 'renderTitle',
        },
      },
      {
        label: '纳税方式',
        name: 'taxType',
        rules: [{ required: true, message: '请选择纳税方式' }],
        control: {
          controlType: 'SELECT',
          options: [
            { label: '自付', value: 'SELF_PAY' },
            { label: '代扣代缴', value: 'WITHHOLD' },
          ],
          showSearch: true,
          filterOption: selectFilterOption,
        },
      },
      () => {
        return {
          label: form.getFieldValue('taxType') === 'SELF_PAY' ? '纳税主体' : '代办',
          name: 'taxPayer',
          hidden: !form.getFieldValue('taxType'),
          shouldUpdate(prevValues, curValues) {
            return prevValues.taxType !== curValues.taxType;
          },
          control: {
            controlType: 'TEXT',
          },
        };
      },
      {
        label: '纳税文件',
        name: 'taxFiles',
        control: {
          controlType: 'UPLOAD',
        },
      },
    ],
    buttonGroup: {
      groups: [
        {
          text: '返回',
          onClick: history.goBack,
        },
        {
          type: 'primary',
          text: '确认纳税',
          loading: submitting,
          onClick: form.submit,
        },
      ],
    },
    onValuesChange(values) {
      if (values.taxType !== undefined) {
        form.setFieldsValue({ taxPayer: taxPayer[values.taxType] });
      }
    },
    onFinish(values) {},
  });
  return <JsonForm {...config} />;
};
```

[自定义表单控件](https://durian-test.hjgpscm.com/international_delivery/shipment_entry/edit?id=3048)

**代码**

```tsx
const Edit: React.FC<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const history = useHistory();
  const [form] = useForm();
  const config = defineConfig({
    form,
    initialValues: { ...data },
    ...fromSingleProps,
    formItems: [
      {
        indent: 0,
        control: {
          controlType: 'TEXT',
          text: '收货信息',
          render: 'renderTitle',
        },
      },
      {
        customRender() {
          return <ReceiversControl key="receivers" name="receivers" skuList={data.table.records} form={form} />;
        },
      },
      {
        indent: 0,
        control: {
          controlType: 'TEXT',
          text: '商品信息',
          render: 'renderTitle',
        },
      },
      {
        label: '总数量(件)',
        name: 'totalPack',
        control: {
          controlType: 'TEXT',
        },
      },
      {
        customRender() {
          return (
            <Form.Item
              key="goods_detail"
              label="商品明细"
              wrapperCol={{ span: 24 }}
              style={{ padding: `0 ${formControlIndent}px` }}
              shouldUpdate={(prevValues, curValues) => {
                return !isEqual(prevValues.receivers, curValues.receivers);
              }}>
              {({ getFieldValue }) => {
                return (
                  <ProductTableControl scroll receivers={getFieldValue('receivers')} value={getFieldValue('table')} />
                );
              }}
            </Form.Item>
          );
        },
      },
    ],
    buttonGroup: {
      groups: [
        {
          text: '返回',
          onClick: history.goBack,
        },
        {
          type: 'primary',
          text: '确认发货',
          loading: submitting,
          onClick: form.submit,
        },
      ],
    },
    onValuesChange(changedValues) {
      if (changedValues.receivers) {
        const receivers = changedValues.receivers;
        const fieldsToValidate = [];
        receivers.forEach((receiver, receiverIndex) => {
          receiver.products?.forEach((product, productIndex) => {
            fieldsToValidate.push(['receivers', receiverIndex, 'products', productIndex, 'splitQuantity']);
          });
        });
        form.validateFields(fieldsToValidate);
      }
    },
    onFinish(values) {},
  });
  return <JsonForm {...config} />;
};
```

## API

#### defineConfig

```ts
const config = defineConfig(options);
```

生成配置工厂函数（为了支持 TS 类型推断）

### options

继承自 antd FormProps，并包含部分自定义属性

#### options.formItems

控件列表

```ts
(FormItemObjectConfig | () => FormItemObjectConfig)[]
```

_FormItemConfig_

继承自 antd FormItemProps，并包含部分自定义属性

```ts
interface FormItemObjectConfig extends FormItemProps {
  // 是否隐藏该控件（表单值不会收集和校验该字段）
  excluded: boolean;
  // 控件行首缩进（为了适配UI规范）
  indent?: number;
  // 控件配置
  control?: ControlConfig;
  // 自定义渲染函数-未内置的控件可以通过customRender实现（注意：该控件不会受配置影响）
  customRender?: (form: FormInstance) => React.ReactNode;
}
```

_ControlConfig_

控件配置，各控件详细配置见各控件类型定义

```ts
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
type CustomControlConfig = {
  controlType: 'CUSTOM';
  render: () => React.ReactElement;
};
```

#### options.buttonGroup

按钮组配置

```ts
ButtonConfig | (() => ButtonConfig);
```

_ButtonConfig_

```ts
interface ButtonConfig extends FormItemProps {
  // 按钮组缩进
  indent?: number;
  // 按钮组（继承自antd ButtonProps）
  groups?: ({ text: string } & ButtonProps)[];
}
```

#### options.onFormCreated

不显示传递 form 实例时，内部会自动生成一个 form 实例，并通过该勾子暴露给父组件

```ts
(form: FormInstance) => void
```

## Tips

- 当你不显示传递 form 实例时，JsonFilter 会在组件卸载时同时销毁 form 实例

## 待实现功能

- 支持更完善的 TS 代码提示
- 支持自定义布局
- 支持数据自动转换
