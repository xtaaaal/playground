
export interface Stringifiable {
    toString(): string;
    [Symbol.toPrimitive](): string;
}
export enum ColorScheme {
    white = 'white',
    black = 'black',
    gray = 'gray',
    darkgray = 'darkgray',
    lightgray = 'lightgray',
    enabled = 'enabled',
    outline = 'outline',
    disabled = 'disabled-bg',
    lightblue = 'lightblue',
    navy = 'navy',
    pink = 'pink',
    blue = 'blue',
  }
  

export interface FormFieldProps<T = any, V = T> {
    name: string;
    label?: string;
    value?: T;
    required?: boolean;
    disabled?: boolean;
    error?: null | undefined | string | Stringifiable;
    showErrorMessage?: boolean;
    validateOnChange?: boolean;
    clearWhenUnmount?: boolean;
    isEmpty?: (value: V) => boolean;
    onChange?: (value: V) => void;
}
export type TextInputAttributes = Pick<React.InputHTMLAttributes<HTMLInputElement>, 'autoComplete' | 'disabled' | 'enterKeyHint' | 'inputMode' | 'maxLength' | 'placeholder' | 'type'>;
export interface TextFieldProps<T = string, V = T> extends FormFieldProps<T, V>, TextInputAttributes {

    type?: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week' | string & {};
}

export type FormInputs = {
    mobile?: number | string,
    name?: string,
    area_code?: number | string;
};

export interface ChoiceItem<T = any> {
    value: T;
    label: string;
}

export type ChoiceItemValueType<T extends ChoiceItem> = T extends ChoiceItem<infer U> ? U : any;
export interface ChoiceFieldProps<T extends ChoiceItem = ChoiceItem> extends FormFieldProps<ChoiceItemValueType<T> | ''> {
    name: string;
    items: readonly (T | Extract<T['value'], number | string | boolean>)[];
    allowUnselect?: boolean;
    onChange?: (value: T['value']) => void;
    onClick?: (value: T['value']) => void;
}