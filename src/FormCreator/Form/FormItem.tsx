import React, { useCallback } from 'react';

import type { CombinedFieldType, ValueType } from '../types';
import './FormItem.scss';

type FormItemProps = CombinedFieldType & {
  index: number;
  onChange: (v: ValueType, index: number) => void;
};

export default ({ label = '', index, onChange, ...props }: FormItemProps) => {
  const handleChange = useCallback(
    (value: ValueType) => onChange(value, index),
    [index, onChange]
  );

  return (
    <div className="form-item">
      <label className="form-item__label">{label}</label>
      <div className="form-item__field">FIELD</div>
    </div>
  );
};
