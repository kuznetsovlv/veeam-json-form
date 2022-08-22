import React from 'react';
import clsx from 'clsx';

import type { Field, TEXT } from '../../types';
import './TextField.scss';

type TextFieldProps = Omit<Field<TEXT>, 'type'> & {
  className?: string;
  id: string;
  form?: string;
  onChange: (v: string) => void;
};

export default ({
  autoComplete = false,
  autoFocus = false,
  autoCorrect = false,
  className,
  cols,
  disabled = false,
  form,
  id,
  maxLength,
  name,
  placeholder,
  readOnly = false,
  resizeable = false,
  rows,
  spellCheck,
  tabIndex,
  value,
  wrap = 'soft',
  onChange
}: TextFieldProps) => (
  <textarea
    autoComplete={autoComplete ? 'on' : 'off'}
    autoCorrect={autoCorrect ? 'on' : 'off'}
    autoFocus={autoFocus}
    className={clsx(className, 'text', { unresizeable: !resizeable })}
    cols={cols}
    disabled={disabled}
    form={form}
    id={id}
    maxLength={maxLength}
    name={name}
    placeholder={placeholder}
    readOnly={readOnly}
    rows={rows}
    spellCheck={spellCheck}
    tabIndex={tabIndex}
    value={value}
    wrap={wrap}
    onChange={({ target: { value } }) => onChange(value)}
  />
);
