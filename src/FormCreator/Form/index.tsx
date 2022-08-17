import React, { useEffect, useState } from 'react';

import { ConfigData } from '../types';
import './Form.scss';

interface FormProps {
  data: ConfigData;
  onConfigChange: (v: string) => void;
}

export default ({ data, onConfigChange }: FormProps) => {
  const [currentData, setCurrentData] = useState(data);

  useEffect(
    () => () => onConfigChange(JSON.stringify(currentData)),
    [currentData]
  );

  const { title, fields = [], buttons = [] } = currentData;

  console.log(fields, buttons);

  return (
    <form className="form">
      <header className="form__title">{title}</header>
      <div className="form__fields">Fields</div>
      <div className="form__buttons">Buttons</div>
    </form>
  );
};
