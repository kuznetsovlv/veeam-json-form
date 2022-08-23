import React from 'react';

import type { CombinedFieldType, Nullable, ValueType } from '../../types';
import BooleanInput from './BooleanInput';
import DateField from './DateField';
import EnumField from './EnumField';
import IntInput from './IntInput';
import StringInput from './StringInput';
import TextField from './TextField';

type FieldProps = CombinedFieldType & {
  className?: string;
  id: string;
  form?: string;
  onChange: (v: Nullable<ValueType>) => void;
};

export default ({
  className,
  id,
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
          id={id}
          form={form}
          value={value}
          onChange={onChange}
        />
      );
    }
    case 'text':
      return (
        <TextField
          {...props}
          id={id}
          className={className}
          form={form}
          value={String(value ?? '')}
          onChange={onChange}
        />
      );
    case 'boolean':
      return (
        <BooleanInput
          {...props}
          id={id}
          form={form}
          value={Boolean(value)}
          onChange={onChange}
        />
      );
    case 'date':
      return (
        <DateField
          {...props}
          className={className}
          id={id}
          value={String(value ?? '')}
          onChange={onChange}
        />
      );
    case 'enum':
      return (
        <EnumField
          {...props}
          className={className}
          form={form}
          value={String(value ?? '')}
          onChange={onChange}
        />
      );
    case 'string':
    default:
      return (
        <StringInput
          {...props}
          className={className}
          id={id}
          form={form}
          value={String(value ?? '')}
          onChange={onChange}
        />
      );
  }
};
