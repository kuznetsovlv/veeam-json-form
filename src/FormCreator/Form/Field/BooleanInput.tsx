import React, { useMemo } from 'react';
// @ts-ignore
import { v4 } from 'uuid';

import type { Field, BOOLEAN } from '../../types';
import './BooleanInput.scss';

type BooleanInputInputProps = Omit<Field<BOOLEAN>, 'type'> & {
  form?: string;
  onChange: (v: boolean) => void;
};

export default ({
  disabled,
  form,
  label,
  name,
  tabIndex,
  value = false,
  onChange
}: BooleanInputInputProps) => {
  const id = useMemo(() => v4(), []);
  return (
    <div className="boolean-input">
      {label && (
        <label htmlFor={id} className="boolean-input__label">
          {label}
        </label>
      )}
      <input
        checked={value}
        className="boolean-input__input"
        disabled={disabled}
        id={id}
        form={form}
        name={name}
        tabIndex={tabIndex}
        type="checkbox"
        onChange={() => onChange(!value)}
      />
    </div>
  );
};
