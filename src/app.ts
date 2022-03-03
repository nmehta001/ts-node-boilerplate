import express from "express";
import helmet from "helmet";

import errorHandler from "./middleware/errorHandler";
import notFound from "./middleware/notFound";
import { init as initApi } from "./api/foo";
import { Config } from "./config";

type AppDependencies = {
  config: Config;
};

export const init = async ({ config: { isProduction } }: AppDependencies) => {
  return express()
    .use(helmet({ contentSecurityPolicy: isProduction }))
    .use(express.json())
    .use("/v1/foo", initApi())
    .use(notFound())
    .use(errorHandler());
};
