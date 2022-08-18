import React, { useEffect, useState, useCallback } from 'react';

import type { ConfigData, Nullable, ValueType } from '../types';
import FormItem from './FormItem';
import './Form.scss';

interface FormProps {
  data: ConfigData;
  onConfigChange: (v: string) => void;
}

export default ({ data, onConfigChange }: FormProps) => {
  const [currentData, setCurrentData] = useState(data);

  useEffect(
    () => () => onConfigChange(JSON.stringify(currentData, null, 4)),
    [currentData]
  );

  const { id, title, fields = [], buttons = [] } = currentData;

  const handleChange = useCallback(
    (value: Nullable<ValueType>, index: number) => {
      const { fields = [] } = currentData;
      setCurrentData({
        ...currentData,
        // @ts-ignore
        fields: fields.map((prop, i) =>
          i === index ? { ...prop, value } : prop
        )
      });
    },
    [currentData, setCurrentData]
  );

  return (
    <form className="form" id={id}>
      <header className="form__title">{title}</header>
      <div className="form__fields">
        {fields.map((props, index) => (
          <FormItem
            {...props}
            key={index} // Of course, it is not recommended to use index as a key, but I suggest that user may forget to add an id into field's config,
            //or he can make mistake and create non-unique id. Also while this form is rendered it is impossible to change fields collection.
            // So by my opinion there is no problem to use index as key here.
            index={index}
            form={id}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="form__buttons">Buttons</div>
    </form>
  );
};
