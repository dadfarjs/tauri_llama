import {
  Button,
  Description,
  DialogPanel,
  DialogTitle,
  Field,
  Fieldset,
  Dialog as HeadlessDialog,
  Label,
} from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Suspense, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DialogSchema } from '../../schema/settings/dialog';
import {
  ENamesDialog,
  TFormFieldsDialogSetting,
  ValidFieldNamesDialog,
} from '../../typings/settings/dialog';
import FormFieldInput from '../formFields/FormFieldInput';
import Spin from '../loading/Spin';
import { useSettingDialogStore } from '../../store/setting';
import { invoke } from '@tauri-apps/api/core';

const Dialog = () => {
  const { openDialog, setOpenDialog } = useSettingDialogStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormFieldsDialogSetting>({
    resolver: zodResolver(DialogSchema), // Apply the zodResolver
  });

  const handleFormSubmit: SubmitHandler<TFormFieldsDialogSetting> = data => {
    console.log(data);
    invoke('greet', { name: 'name' }).then(res => {
      console.log(res);
    });
  };

  function close() {
    setOpenDialog(false);
  }

  return (
    <HeadlessDialog
      open={openDialog}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/65">
        <div className="flex min-h-full items-center justify-center p-4 ">
          <DialogPanel
            transition
            className="flex flex-col w-full max-w-md rounded-xl bg-[#2f3041] p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 gap-6"
          >
            <DialogTitle as="h2" className="text-base/7 font-bold text-white">
              Settings
            </DialogTitle>{' '}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="w-full max-w-lg">
                <Fieldset className="flex flex-col gap-4">
                  <Field>
                    <Label className="text-sm/6 font-medium text-white">Server Address</Label>
                    <FormFieldInput<TFormFieldsDialogSetting, ValidFieldNamesDialog>
                      type="text"
                      placeholder="Server URL"
                      name={ENamesDialog.SERVER_ADDRESS}
                      register={register}
                      error={errors.serverAddress}
                    />
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium text-white">DataBase Address</Label>
                    <Description className="text-sm/6 text-white/50">
                      We currently only ship to North America.
                    </Description>
                    <FormFieldInput<TFormFieldsDialogSetting, ValidFieldNamesDialog>
                      type="text"
                      placeholder="DataBase URL"
                      name={ENamesDialog.DATABASE_ADDRESS}
                      register={register}
                      error={errors.databaseAddress}
                    />
                  </Field>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center ms-auto justify-end gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  >
                    {isSubmitting ? 'Saving...' : 'Save changes'}
                  </Button>
                </Fieldset>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </HeadlessDialog>
  );
};

export default Dialog;
