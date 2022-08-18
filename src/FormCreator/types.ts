export type Nullable<T> = T | null;

export type Mode = 'config' | 'result';

export type FieldType = 'int' | 'string' | 'text' | 'boolean' | 'date' | 'enum';

export interface FieldCommon {
  autoFocus?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  readOnly?: boolean;
  tabIndex?: number;
  type: FieldType;
}

export type Field<T> = FieldCommon & T;

export interface BUTTON {
  text: string;
}

export interface INT {
  value?: number;
  type: 'int';
}

export interface STRING {
  autoComplete?: boolean;
  maxLength?: number;
  value?: string;
  placeholder?: string;
  spellCheck?: boolean;
  type: 'string';
}

export interface TEXT {
  value?: string;
  placeholder?: string;
  type: 'text';
}

export interface BOOLEAN {
  value?: boolean;
  type: 'boolean';
}

export interface DATE {
  value?: Date;
  placeholder?: string;
  from?: Date;
  to?: Date;
  type: 'date';
}

export interface ENUM {
  value?: string;
  items: { label: string; value: string }[];
  type: 'enum';
}

export type CombinedFieldType = Field<
  INT | STRING | TEXT | BOOLEAN | DATE | ENUM
>;

export interface ConfigData {
  id?: string;
  title?: string;
  fields?: CombinedFieldType[];
  buttons?: BUTTON[];
}

export type ValueType = string | number | boolean;
