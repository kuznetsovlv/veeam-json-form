import React from 'react';

import type { CombinedFieldType, Nullable, ValueType } from '../../types';
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
    case 'int':
      return <>INT</>;
    case 'text':
      return <>TEXT</>;
    case 'boolean':
      return <>BOOLEAN</>;
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
