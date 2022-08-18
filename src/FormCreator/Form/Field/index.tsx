import React from 'react';

import type { CombinedFieldType, Nullable, ValueType } from '../../types';
import BooleanInput from './BooleanInput';
import IntInput from './IntInput';
import StringInput from './StringInput';

type FieldProps = CombinedFieldType & {
  className?: string;
  form?: string;
  onChange: (v: Nullable<ValueType>) => void;
};

export default ({
  className,
  form,
  type,
  value,
  onChange,
  ...props
}: FieldProps) => {
  switch (type) {
    case 'int': {
      if (typeof value !== 'number' && value !== null) {
        value = Number(value);
      }
      return (
        <IntInput
          {...props}
          className={className}
          form={form}
          value={value}
          onChange={onChange}
        />
      );
    }
    case 'text':
      return <>TEXT</>;
    case 'boolean':
      return (
        <BooleanInput
          {...props}
          form={form}
          value={Boolean(value)}
          onChange={onChange}
        />
      );
    case 'date':
      return <>DATE</>;
    case 'enum':
      return <>ENUM</>;
    case 'string':
    default:
      return (
        <StringInput
          {...props}
          className={className}
          form={form}
          value={String(value ?? '')}
          onChange={onChange}
        />
      );
  }
};
