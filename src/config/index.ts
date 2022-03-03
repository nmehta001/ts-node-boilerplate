import { bool, InferType, number, object } from "yup";

const configSchema = object({
  isDevelopment: bool(),
  isProduction: bool(),
  port: number().required(),
});

export const init = async () => {
  const env = process.env.NODE_ENV || "production";

  return configSchema.validate({
    isDevelopment: env !== "production",
    isProduction: env === "production",

    port: process.env.PORT || 3001,
  });
};

export type Config = InferType<typeof configSchema>;
