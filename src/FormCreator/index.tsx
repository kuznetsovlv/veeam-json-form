import React, { useState, useMemo, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import ConfigEditor from './ConfigEditor';
import Form from './Form';
import Tabs from './Tabs';
import type { Mode, ConfigData, Nullable } from './types';
import './FormCreator.scss';

interface FormCreatorProps {
  className?: string;
}

export default ({ className }: FormCreatorProps) => {
  const [mode, setMode]: [Mode, Dispatch<SetStateAction<Mode>>] = useState(
    'config' as Mode
  );

  const [config, setConfig] = useState('');

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
          <Form data={configData} onConfigChange={setConfig} />
        )}
      </div>
    </div>
  );
};
