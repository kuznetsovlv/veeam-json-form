import React from 'react';
import clsx from 'clsx';

import type { Field, BOOLEAN } from '../../types';
import './BooleanInput.scss';

type BooleanInputInputProps = Omit<Field<BOOLEAN>, 'type'> & {
  id: string;
  form?: string;
  onChange: (v: boolean) => void;
};

export default ({
  autoFocus = false,
  disabled,
  id,
  form,
  label,
  name,
  tabIndex,
  value = false,
  onChange
}: BooleanInputInputProps) => {
  return (
    <label className="boolean-input" htmlFor={id}>
      {label}
      <input
        autoFocus={autoFocus}
        checked={value}
        className={clsx('boolean-input__input', { labeled: !!label })}
        disabled={disabled}
        id={id}
        form={form}
        name={name}
        tabIndex={tabIndex}
        type="checkbox"
        onChange={() => onChange(!value)}
      />
    </label>
  );
};
