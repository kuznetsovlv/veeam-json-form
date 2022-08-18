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
  onChange,
  ...props
}: FormItemProps) => {
  return (
    <div className="form-item">
      <label className="form-item__label">{label}</label>
      <Field
        {...props}
        className="form-item__field"
        tabIndex={tabIndex ?? index}
        onChange={useCallback(
          (value: Nullable<ValueType>) => onChange(value, index),
          [index, onChange]
        )}
      />
    </div>
  );
};
