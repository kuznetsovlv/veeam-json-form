export type Mode = 'config' | 'result';

export type FieldType = 'int' | 'string' | 'text' | 'boolean' | 'date' | 'enum';

export interface FieldCommon {
  label?: string;
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
  value?: string;
  placeholder?: string;
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
  title?: string;
  fields?: CombinedFieldType[];
  buttons?: BUTTON[];
}

export type Nullable<T> = T | null;

export type ValueType = string | number | boolean | null;
