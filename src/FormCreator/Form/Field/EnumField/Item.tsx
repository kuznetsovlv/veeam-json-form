import React, { useMemo } from 'react';
// @ts-ignore
import { v4 } from 'uuid';

import type { ENUM_ITEM } from '../../../types';
import './Item.scss';
import clsx from 'clsx';

type ItemProps = ENUM_ITEM & {
  disabled: boolean;
  form?: string;
  name: string;
  checked: boolean;
  tabIndex?: number;
  onClick: (v: string) => void;
};

export default ({
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
        checked={checked}
        disabled={disabled}
        form={form}
        id={id}
        name={name}
        tabIndex={tabIndex}
        type="radio"
        value={value}
        onChange={() => onClick(value)}
        onFocus={console.log}
      />
      <div className={clsx('item__input', { checked })}>
        <div />
      </div>
      {label ?? value}
    </label>
  );
};
