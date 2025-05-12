import { z } from "zod";

const input = z
  .string()
  .min(10)
  .max(300)
  .refine((val) => val.includes("http"));

export const DialogSchema = z.object({
  serverAddress: input,
  databaseAddress: input,
});
