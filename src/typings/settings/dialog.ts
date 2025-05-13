import { z } from 'zod';
import { DialogSchema } from '../../schema/settings/dialog';

export type ValidFieldNamesDialog = 'serverAddress' | 'databaseAddress';

export enum ENamesDialog {
  'SERVER_ADDRESS' = 'serverAddress',
  'DATABASE_ADDRESS' = 'databaseAddress',
}

export type TFormFieldsDialogSetting = z.infer<typeof DialogSchema>;
