import { init as initConfig } from "./config";
import { init as initApp } from "./app";

(async () => {
  const config = await initConfig();

  initApp({ config }).then((app) => {
    app.listen(config.port, () => console.info(`Listening on port ${config.port}`));
  });
})();
