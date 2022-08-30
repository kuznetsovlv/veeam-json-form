import React, { useCallback } from 'react';
import type { ChangeEvent } from 'react';

import './ConfigEditor.scss';

interface ConfigEditorProps {
  value: string;
  onChange: (v: string) => void;
}
export default ({ value, onChange }: ConfigEditorProps) => (
  <textarea
    autoFocus
    autoCorrect="on"
    className="config"
    spellCheck
    value={value}
    wrap="soft"
    onChange={useCallback(
      ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
        onChange(value),
      [onChange]
    )}
  />
);
