import React, { useMemo } from 'react';
// @ts-ignore
import { v4 } from 'uuid';
import clsx from 'clsx';

import type { Field, ENUM } from '../../../types';
import Item from './Item';
import './EnumField.scss';

type EnumFieldProps = Omit<Field<ENUM>, 'type'> & {
  className?: string;
  form?: string;
  onChange: (v: string) => void;
};

export default ({
  className,
  disabled = false,
  form,
  items = [],
  name: defaultName,
  tabIndex,
  value: fieldValue,
  onChange
}: EnumFieldProps) => {
  const name = useMemo(() => defaultName ?? v4(), [defaultName]);
  const hasTabIndex = typeof tabIndex === 'number';

  return (
    <fieldset className={clsx(className, 'enum')}>
      {items.map(({ autoFocus, value, label }, index) => (
        <Item
          key={value}
          autoFocus={autoFocus}
          form={form}
          label={label}
          disabled={disabled}
          tabIndex={hasTabIndex ? tabIndex + index : undefined}
          name={name}
          value={value}
          checked={value === fieldValue}
          onClick={onChange}
        />
      ))}
    </fieldset>
  );
};
