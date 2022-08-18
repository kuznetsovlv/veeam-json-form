import React from 'react';
import clsx from 'clsx';

import type { Field, STRING } from '../../types';

type StringInputProps = Omit<Field<STRING>, 'type'> & {
  className?: string;
  id: string;
  form?: string;
  onChange: (v: string) => void;
};

export default ({
  autoComplete = false,
  autoFocus = false,
  className,
  disabled = false,
  id,
  form,
  maxLength,
  placeholder,
  readOnly = false,
  spellCheck = false,
  tabIndex,
  value = '',
  onChange
}: StringInputProps) => (
  <input
    autoComplete={autoComplete ? 'on' : 'off'}
    autoFocus={autoFocus}
    className={clsx(className, 'string-input')}
    disabled={disabled || readOnly}
    id={id}
    form={form}
    maxLength={maxLength}
    placeholder={placeholder}
    readOnly={readOnly}
    spellCheck={spellCheck}
    tabIndex={tabIndex}
    type="text"
    value={value}
    onChange={({ target: { value } }) => onChange(value)}
  />
);
