import React from 'react';

import type { Mode } from '../types';
import Tab from './Tab';
import './Tabs.scss';

interface TabsProps {
  disabled: boolean;
  mode: Mode;
  onSetMode: (m: Mode) => void;
}

export default ({ disabled, mode, onSetMode }: TabsProps) => (
  <div className="tabs">
    <Tab
      selected={mode === 'config'}
      disabled={disabled}
      mode="config"
      onClick={onSetMode}
    >
      Config
    </Tab>
    <Tab
      selected={mode === 'result'}
      disabled={disabled}
      mode="result"
      onClick={onSetMode}
    >
      Result
    </Tab>
  </div>
);
