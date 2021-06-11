import React from 'react';
import LabelControl from '@/components/LabelControl';

const renderer = {
  renderTitle(text: any) {
    return <h5 style={{ marginBottom: '0px', fontSize: 16, fontWeight: 600 }}>{text}</h5>;
  },
};

type Render = keyof typeof renderer;
export interface TextControlProps {
  label?: React.ReactNode;
  text?: React.ReactNode;
  value?: any;
  render?: Render | ((value: any) => React.ReactNode);
  unitAfter?: React.ReactNode;
  unitBefore?: React.ReactNode;
}

const isEmpty = (value: any): boolean => {
  return [undefined, null].includes(value);
};

const TextControl: React.FC<TextControlProps> = ({ label, value, text, render, unitAfter, unitBefore }) => {
  let content = text === undefined ? value : text;
  switch (typeof render) {
    case 'string':
      content = renderer[render](content);
      break;
    case 'function':
      content = render(content);
      break;
  }
  content = isEmpty(content) ? null : content;
  return (
    <LabelControl label={label}>
      {unitBefore}
      {content}
      {unitAfter}
    </LabelControl>
  );
};

export default TextControl;
