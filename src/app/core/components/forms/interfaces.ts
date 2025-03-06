import { Icon_I } from "@interfaces/globals.interface";

export type FieldStatus_Type = 'error' | 'warning' | 'success' | 'info';


type typeField =  'checkbox' | 'text' | 'select' | 'select_special' | 'textarea' | 'file' | 'file_wIcon' | 'date_picker';

export interface ValidationsRule_Separate_I {
  [key: string]: ValidationRule_I[];
}

const type_array_default = [
  "required",
  "required_true",
  "select_single_required",
  "select_multi_required",
  "not_required",
  "conditional_required",
  "conditional_select_multi_required",
  "conditional_select_single_required",
  "is_array_required",
  "min_length",
  "max_length",
  "email",
  "tel",
  "pattern",
  "password",
  "min",
  "max",
  "custom",
  "url",
  "same_valueField",
  "file_format_document",
  "file_format_image",
  "file_format_video",
  "file_size_5m",
  "file_size_10m"
] as const;
export type Validations_Type = typeof type_array_default[number];

interface ConditionalRule {
  key: string; // La clave del campo del formulario sobre el que se basa la condición
  is: any; // El valor que activa la condición
  then: ValidationRule_I; // Regla a aplicar si se cumple la condición
  otherwise: ValidationRule_I; // Regla a aplicar si no se cumple la condición
}

export interface ValidationRule_I {
  layer: 'global' | 'field';
  type: Validations_Type;
  message: string;
  value?: number | string;
}
  // conditional?: ConditionalRule; // Añadido para soportar condiciones

export interface FieldValue_I {
  // field: string;
  // value: string
  [x: string]: any,
}


export interface SelectValue_I<T = string> {
  value: T;
  label: string;
}

export interface SelectField_Props_I {
  label: string;
  name: string;
  placeholder?: string;
  items: SelectValue_I[];
  validation_rules?: ValidationRule_I[]
  icon?: string;
  field_class?: string;
  [x: string]: any,
}

export interface SelectSpecialField_Props_I {
  label?: string;
  name: string;
  isMulti?: boolean;
  placeholder?: string;
  items: SelectValue_I[];
  value: SelectValue_I[];
  notFound?: string;
  validation_rules?: ValidationRule_I[]
  icon?: string;
  field_class?: string;
  [x: string]: any,
}



export interface DatePicker_Field_Props_I {
  label: string;
  name: string;
  range: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  align?: string;
  validation_rules?: ValidationRule_I[];
  field_class?: string;
  [x: string]: any,
}

export interface FileHideInput_Props_I {
  multiple: boolean;
  name: string;
  value: any;
  label: string;
  type: 'file';
  accept: string;
  validation_rules?: ValidationRule_I[];
  inlineErrors?: boolean;
  isLoading?: boolean;
  [x: string]: any,
}

export interface File_wIconField_Props_I {
  multiple: boolean;
  name: string;
  value: any;
  label: string;
  type: 'file';
  accept: string;
  icon?: string;
  side: 'vertical' | 'horizontal';
  validation_rules?: ValidationRule_I[];
  inlineErrors?: boolean;
  isLoading?: boolean;
  [x: string]: any,
}

export interface TextAreaField_Props_I {
  label: string;
  name: string;
  placeholder?: string;
  icon?: string;
  validation_rules?: ValidationRule_I[];
  field_class?: string;
  [x: string]: any,
}

export interface TextField_I {
  label: string;
  name: string;
  disabled?: boolean;
  type: 'text' | 'number' | 'email' | 'password' | 'tel';
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  labelInline?: boolean;
  icon?: Icon_I;
  value?: string;
  validation_rules?: ValidationRule_I[];
  classes?: string;
  [x: string]: any,
}

export interface CheckBoxField_I {
  label: string;
  name: string;
  validation_rules?: ValidationRule_I[];
  classes?: string;
  [x: string]: any,
}

export interface Field_I<T = any> {
  typeField: typeField;
  props: T;
}

export type FieldUnion_Type =
  | Field_I<TextField_I> & { typeField: 'text' }
  | Field_I<CheckBoxField_I> & { typeField: 'checkbox' }

export interface LayoutRow_I {
  fields: FieldUnion_Type[];
  classes?: string
}

export interface Meta_Form_I {
  submitted: boolean;
}

export interface Form_I <T = any> {
  data: T;
  metaForm: Meta_Form_I;
 }