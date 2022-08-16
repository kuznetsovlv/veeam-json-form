import React from 'react';

import { Mode } from '../types';
import Tab from './Tab';
import './Tabs.scss';

interface TabsProps {
  mode: Mode;
  onSetMode: (_: Mode) => void;
}

export default ({ mode, onSetMode }: TabsProps) => (
  <div className="tabs">
    <Tab selected={mode === 'config'} mode="config" onClick={onSetMode}>
      Config
    </Tab>
    <Tab selected={mode === 'result'} mode="result" onClick={onSetMode}>
      Result
    </Tab>
  </div>
);
