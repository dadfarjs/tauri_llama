import { Input } from "@headlessui/react";
import clsx from "clsx";
import { IFormFieldProps } from "../../typings/formFields";

function FormFieldInput<T extends object, K>(props: IFormFieldProps<T, K>) {
  const { type, placeholder, name, register, error, registerProps } = props;

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name as any, { ...registerProps })}
        className={clsx(
          "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
          "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
        )}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
}
export default FormFieldInput;
