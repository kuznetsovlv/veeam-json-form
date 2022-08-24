import React, { lazy } from 'react';

import LazyComponent from '../../../LazyComponent';
import type { CombinedFieldType, Nullable, ValueType } from '../../types';

const BooleanInput = lazy(() => import('./BooleanInput'));
const DateField = lazy(() => import('./DateField'));
const EnumField = lazy(() => import('./EnumField'));
const IntInput = lazy(() => import('./IntInput'));
const StringInput = lazy(() => import('./StringInput'));
const TextField = lazy(() => import('./TextField'));

type FieldProps = CombinedFieldType & {
  className?: string;
  id: string;
  form?: string;
  onChange: (v: Nullable<ValueType>) => void;
};

export default ({
  className,
  id,
  form,
  type,
  value,
  onChange,
  ...props
}: FieldProps) => {
  switch (type) {
    case 'int': {
      if (typeof value !== 'number' && value !== null) {
        value = Number(value);
      }
      return (
        <LazyComponent>
          <IntInput
            {...props}
            className={className}
            id={id}
            form={form}
            value={value}
            onChange={onChange}
          />
        </LazyComponent>
      );
    }
    case 'text':
      return (
        <LazyComponent>
          <TextField
            {...props}
            id={id}
            className={className}
            form={form}
            value={String(value ?? '')}
            onChange={onChange}
          />
        </LazyComponent>
      );
    case 'boolean':
      return (
        <LazyComponent>
          <BooleanInput
            {...props}
            id={id}
            form={form}
            value={Boolean(value)}
            onChange={onChange}
          />
        </LazyComponent>
      );
    case 'date':
      return (
        <LazyComponent>
          <DateField
            {...props}
            className={className}
            id={id}
            value={String(value ?? '')}
            onChange={onChange}
          />
        </LazyComponent>
      );
    case 'enum':
      return (
        <LazyComponent>
          <EnumField
            {...props}
            className={className}
            form={form}
            value={String(value ?? '')}
            onChange={onChange}
          />
        </LazyComponent>
      );
    case 'string':
    default:
      return (
        <LazyComponent>
          <StringInput
            {...props}
            className={className}
            id={id}
            form={form}
            value={String(value ?? '')}
            onChange={onChange}
          />
        </LazyComponent>
      );
  }
};
