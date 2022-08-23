import React, { useMemo, useCallback } from 'react';
// @ts-ignore
import DatePicker from 'react-datepicker';
import { format, parse } from 'date-fns';

import type { Field, DATE, Nullable } from '../../types';
import './DatePicker.scss';

const FORMAT = 'yyyy-MM-dd';

type DateFieldProps = Omit<Field<DATE>, 'type'> & {
  id: string;
  className?: string;
  onChange: (v: Nullable<string>) => void;
};

export default ({
  autoFocus = false,
  className,
  clearable = false,
  disabled = false,
  from,
  id,
  name,
  placeholder,
  readOnly = false,
  tabIndex,
  to,
  value,
  onChange
}: DateFieldProps) => {
  const startDate = useMemo(
    () => (from ? parse(from, FORMAT, new Date()) : null),
    [from]
  );
  const endDate = useMemo(
    () => (to ? parse(to, FORMAT, new Date()) : null),
    [to]
  );

  const selected = useMemo(
    () => (value ? parse(value, FORMAT, new Date()) : null),
    [value]
  );

  return (
    <DatePicker
      autoFocus={autoFocus}
      className={className}
      dateFormat={FORMAT}
      disabled={disabled}
      endDate={endDate}
      id={id}
      isClearable={clearable}
      name={name}
      placeholderText={placeholder}
      readOnly={readOnly}
      selected={selected}
      startDate={startDate}
      tabIndex={tabIndex}
      onChange={useCallback(
        (date: Date) => onChange(date ? format(date, FORMAT) : null),
        [onChange]
      )}
    />
  );
};
