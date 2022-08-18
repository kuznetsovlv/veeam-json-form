import React, { useCallback } from 'react';

import type { CombinedFieldType, Nullable, ValueType } from '../types';
import Field from './Field';
import './FormItem.scss';

type FormItemProps = CombinedFieldType & {
  index: number;
  form?: string;
  onChange: (v: Nullable<ValueType>, index: number) => void;
};

export default ({
  label = '',
  index,
  tabIndex,
  type,
  onChange,
  ...props
}: FormItemProps) => {
  return (
    <div className="form-item">
      {type !== 'boolean' && (
        <label className="form-item__label">{label}</label>
      )}
      <Field
        {...props}
        className="form-item__field"
        label={label}
        tabIndex={tabIndex ?? index}
        type={type}
        onChange={useCallback(
          (value: Nullable<ValueType>) => onChange(value, index),
          [index, onChange]
        )}
      />
    </div>
  );
};
