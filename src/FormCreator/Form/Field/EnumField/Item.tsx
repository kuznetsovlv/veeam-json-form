import React, { useMemo } from 'react';
// @ts-ignore
import { v4 } from 'uuid';

import type { ENUM_ITEM } from '../../../types';
import './Item.scss';

type ItemProps = ENUM_ITEM & {
  disabled: boolean;
  form?: string;
  name: string;
  checked: boolean;
  tabIndex?: number;
  onClick: (v: string) => void;
};

export default ({
  autoFocus = false,
  disabled,
  form,
  label,
  name,
  checked,
  tabIndex,
  value,
  onClick
}: ItemProps) => {
  const id = useMemo(() => v4(), []);
  return (
    <label className="item" htmlFor={id}>
      <input
        autoFocus={autoFocus}
        checked={checked}
        className="item__input"
        disabled={disabled}
        form={form}
        id={id}
        name={name}
        tabIndex={tabIndex}
        type="radio"
        value={value}
        onClick={() => onClick(value)}
      />
      {label ?? value}
    </label>
  );
};
