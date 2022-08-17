import React, {
  Dispatch,
  SetStateAction,
  useState,
  useMemo,
  useEffect
} from 'react';
import clsx from 'clsx';

import ConfigEditor from './ConfigEditor';
import Tabs from './Tabs';
import { Mode } from './types';
import './FormCreator.scss';

interface FormCreatorProps {
  className?: string;
}

export default ({ className }: FormCreatorProps) => {
  const [mode, setMode]: [Mode, Dispatch<SetStateAction<Mode>>] = useState(
    'config' as Mode
  );

  const [config, setConfig] = useState('');

  const configData = useMemo(() => {
    if (!config) {
      return null;
    }

    try {
      return JSON.parse(config);
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
      </div>
    </div>
  );
};
