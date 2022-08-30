import React, { useCallback } from 'react';
import clsx from 'clsx';

import type { Field, BOOLEAN } from '../../types';
import './BooleanInput.scss';

type BooleanInputInputProps = Omit<Field<BOOLEAN>, 'type'> & {
  id: string;
  form?: string;
  onChange: (v: boolean) => void;
};

export default ({
  disabled,
  id,
  form,
  label,
  name,
  tabIndex,
  value = false,
  onChange
}: BooleanInputInputProps) => (
  <label className="boolean-input" htmlFor={id}>
    {label}
    <input
      checked={value}
      disabled={disabled}
      id={id}
      form={form}
      name={name}
      tabIndex={tabIndex}
      type="checkbox"
      onChange={useCallback(() => onChange(!value), [value, onChange])}
    />
    <div
      className={clsx('boolean-input__input', {
        labeled: !!label,
        checked: value
      })}
    >
      <div />
    </div>
  </label>
);
