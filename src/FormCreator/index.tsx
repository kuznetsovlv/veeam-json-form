import React, { useState, useMemo, useEffect, lazy } from 'react';
import clsx from 'clsx';

import LazyComponent from '../LazyComponent';
import ConfigEditor from './ConfigEditor';
import Tabs from './Tabs';
import type { Mode, ConfigData, Nullable } from './types';
import './FormCreator.scss';

const Form = lazy(() => import('./Form'));

interface FormCreatorProps {
  className?: string;
}

export default ({ className }: FormCreatorProps) => {
  const [mode, setMode] = useState<Mode>('config');

  const [config, setConfig] = useState<string>('');

  const configData: Nullable<ConfigData> = useMemo(() => {
    if (!config) {
      return null;
    }

    try {
      return JSON.parse(config) as ConfigData;
    } catch (_) {
      return null;
    }
  }, [config]);

  useEffect(() => {
    if (!configData) {
      setMode('config');
    }
  }, [configData, setMode]);

  return (
    <div className={clsx('wrapper', className)}>
      <Tabs disabled={!configData} mode={mode} onSetMode={setMode} />
      <div className="main">
        {mode === 'config' && (
          <ConfigEditor value={config} onChange={setConfig} />
        )}
        {mode === 'result' && !!configData && (
          <LazyComponent>
            <Form data={configData} onConfigChange={setConfig} />
          </LazyComponent>
        )}
      </div>
    </div>
  );
};
