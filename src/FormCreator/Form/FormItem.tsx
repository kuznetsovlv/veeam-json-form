import React, { useCallback, useMemo } from 'react';
// @ts-ignore
import { v4 } from 'uuid';

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
  const id = useMemo(() => v4(), []);

  return (
    <div className="form-item">
      {type !== 'boolean' && (
        <label htmlFor={id} className="form-item__label">
          {label}
        </label>
      )}
      <Field
        {...props}
        className="form-item__field"
        id={id}
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
