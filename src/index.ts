import dotenv from 'dotenv';

dotenv.config();

import app, { app_evt } from '@lytical/app';

// app events occur in the following order:
// 1. create_server
// 2. server_starting
// 3. server_listening
// 4. server_started

app.once(app_evt.create_server, (cfg) => {
  // modify (cfg) as needed, or remove this listener if not needed.
  // for example, create a https server instead of http,
  // and push async operations to fetch ssl keys or data, ..., to (cfg.wait_for).
  // add middleware to (cfg.express), that executes before auto registered routes, etc.
  console.log(`the root route is (${cfg.root_route})`);
});

app.once(app_evt.server_starting, (cfg) => {
  // modify (cfg) as needed, or remove this listener if not needed.
  // add middleware to this application after auto registered routes are added.
  // for example error handling middleware, etc.
  // push async operations to fetch settings from a database, to (cfg.wait_for).
  // this is the last chance to register dependencies in the ioc collection
  // before the ioc container is created and the server starts.
  console.log(`the hostname is (${cfg.hostname})`);
});

app.once(app_evt.server_listening, () => {
  // remove this listener if not needed.
  // use it to perform operations after the server starts listening.
  // the ioc container is created and ready at this point.
});

app.once(app_evt.server_started, () => {
  // remove this listener if not needed.
  // use it to perform operations after the server has started.
});

app.start();
