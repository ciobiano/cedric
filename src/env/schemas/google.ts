import { z } from "zod";
import { zFalse, zStringToBool, zTrue } from "./utils";

export const googleServerSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().nonempty(),
  GOOGLE_CLIENT_SECRET: z.string().nonempty(),
});

export const googleClientSchema = z.object({
  NEXT_PUBLIC_ENABLE_GOOGLE_INTEGRATION: zStringToBool,
});

export const clientSchema = googleClientSchema;
export const serverSchema = z.intersection(
  googleClientSchema,
  z.union([
    z
      .object({ NEXT_PUBLIC_ENABLE_GOOGLE_INTEGRATION: zTrue })
      .merge(googleServerSchema),
    z.object({ NEXT_PUBLIC_ENABLE_GOOGLE_INTEGRATION: zFalse }),
  ]),
);