import React, { useState } from 'react';
import clsx from 'clsx';

import type { Field, INT, Nullable } from '../../types';

type IntInputProps = Omit<Field<INT>, 'type'> & {
  className?: string;
  form?: string;
  onChange: (v: Nullable<number>) => void;
};

const __toBound = (
  value: Nullable<number>,
  min: number,
  max: number
): Nullable<number> => {
  if (value === null || max < min) {
    return null;
  }

  if (value < min) {
    return min;
  }

  return value > max ? max : value;
};

export default ({
  autoComplete = false,
  autoFocus = false,
  className,
  disabled = false,
  form,
  max = Infinity,
  min = -Infinity,
  placeholder,
  readOnly = false,
  tabIndex,
  value = null,
  onChange
}: IntInputProps) => {
  const [currentValue, setCurrentValue] = useState(
    value === null || isNaN(value) ? '' : String(value)
  );
  max = Math.ceil(max);
  min = Math.floor(min);

  return (
    <input
      autoComplete={autoComplete ? 'on' : 'off'}
      autoFocus={autoFocus}
      className={clsx(className, 'string-input')}
      disabled={disabled || readOnly}
      form={form}
      max={max}
      min={min}
      step={1}
      placeholder={placeholder}
      readOnly={readOnly}
      tabIndex={tabIndex}
      type="number"
      value={currentValue}
      onChange={({ target: { value } }) => {
        if (/\./.test(value)) {
          setCurrentValue(value.replace('.', ''));
          return;
        }
        if (!value) {
          onChange(null);
        } else {
          const numericValue = Number(value);
          if (
            !isNaN(numericValue) &&
            __toBound(numericValue, min, max) === numericValue
          ) {
            onChange(numericValue);
          }
        }

        setCurrentValue(value);
      }}
      onBlur={() => {
        let newValue: Nullable<number> = currentValue
          ? Number(currentValue)
          : null;
        if (newValue !== null && isNaN(newValue)) {
          newValue = null;
        }

        newValue = __toBound(newValue, min, max);

        if (newValue !== value) {
          onChange(newValue);
        }
      }}
    />
  );
};
