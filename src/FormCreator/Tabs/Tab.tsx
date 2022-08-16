import React from 'react';
import clsx from 'clsx';

import { Mode } from '../types';
import './Tabs.scss';

interface TabProps {
  children: string;
  mode: Mode;
  selected: boolean;
  onClick: (m: Mode) => void;
}

export default ({ children, mode, selected, onClick }: TabProps) => (
  <div className={clsx('tab', { selected })} onClick={() => onClick(mode)}>
    {children}
  </div>
);
