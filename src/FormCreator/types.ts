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

export type ButtonType = 'submit' | 'button' | 'reset';

export interface BUTTON {
  disabled?: boolean;
  text: string;
  type?: ButtonType;
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

export type TEXT = {
  autoCorrect?: boolean;
  cols?: number;
  maxLength?: number;
  resizeable?: boolean;
  rows?: number;
  value?: string;
  spellCheck?: boolean;
  wrap?: 'hard' | 'soft' | 'off';
} & Input;

export interface BOOLEAN {
  value?: boolean;
  autoFocus?: boolean;
}

export interface DATE {
  autoFocus?: boolean;
  clearable?: boolean;
  from?: string;
  placeholder?: string;
  readOnly?: boolean;
  to?: string;
  value?: Nullable<string>;
}

export interface ENUM_ITEM {
  autoFocus?: boolean;
  label: string;
  value: string;
}

export interface ENUM {
  value?: string;
  items?: ENUM_ITEM[];
}

export type CombinedFieldType = Field<
  INT | STRING | TEXT | BOOLEAN | DATE | ENUM
>;

export interface ConfigData {
  autoComplete?: boolean;
  action?: string;
  id?: string;
  method?: 'get' | 'post';
  target?: 'blank' | 'self' | 'parent' | 'top';
  title?: string;
  fields?: CombinedFieldType[];
  buttons?: BUTTON[];
}

export type ValueType = string | number | boolean;
