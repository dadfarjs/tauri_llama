import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface IFormFieldProps<T extends object, K> {
  type: string;
  placeholder: string;
  name: K;
  register: UseFormRegister<T>;
  registerProps?: RegisterOptions<T, any>;
  error: FieldError | undefined;
}
