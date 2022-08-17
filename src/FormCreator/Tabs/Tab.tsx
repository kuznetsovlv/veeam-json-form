import React from 'react';
import clsx from 'clsx';

import { Mode } from '../types';
import './Tabs.scss';

interface TabProps {
  children: string;
  disabled?: boolean;
  mode: Mode;
  selected: boolean;
  onClick: (m: Mode) => void;
}

export default ({
  children,
  disabled = false,
  mode,
  selected,
  onClick
}: TabProps) => (
  <div
    className={clsx('tab', {
      selected,
      disabled,
      active: !disabled && !selected
    })}
    onClick={() => {
      if (!disabled) {
        onClick(mode);
      }
    }}
  >
    {children}
  </div>
);
