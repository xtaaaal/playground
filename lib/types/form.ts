
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
};