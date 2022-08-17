import React from 'react';

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
    onChange={({ target: { value } }) => onChange(value)}
  />
);
