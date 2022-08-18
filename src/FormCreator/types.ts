export type Nullable<T> = T | null;

export type Mode = 'config' | 'result';

export type FieldType = 'int' | 'string' | 'text' | 'boolean' | 'date' | 'enum';

export interface FieldCommon {
  disabled?: boolean;
  label?: string;
  name?: string;
  tabIndex?: number;
  type: FieldType;
}

export interface Input {
  autoComplete?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  readOnly?: boolean;
}

export type Field<T> = FieldCommon & T;

export interface BUTTON {
  text: string;
}

export type INT = {
  max?: number;
  min?: number;
  value?: Nullable<number>;
} & Input;

export type STRING = {
  maxLength?: number;
  value?: string;
  spellCheck?: boolean;
} & Input;

export interface TEXT {
  value?: string;
  placeholder?: string;
}

export interface BOOLEAN {
  value?: boolean;
  autoFocus?: boolean;
}

export interface DATE {
  value?: Date;
  placeholder?: string;
  from?: Date;
  to?: Date;
}

export interface ENUM {
  value?: string;
  items: { label: string; value: string }[];
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
