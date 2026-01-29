import dotenv from 'dotenv';

dotenv.config();

import app, { app_evt } from '@lytical/app';

// app events occur in the following order:
// 1. create_server
// 2. server_starting
// 3. server_listening

app.once(app_evt.create_server, (evt) => {
  // set the event parameter (evt.server) property to
  // provide the server instance of your choice.

  // e.g.
  //   evt.server = createHttpsServer(evt.express, my_https_options);

  // a standard http server instance is created by default,
  // if no server is provided.

  // evt.root_route can be modified to change the root route
  // where auto registered routes are mounted.

  // default is '/api'.

  // push async operations (Promise) that fetch encryption keys, ...
  // into the event parameter (evt.wait_for.push(...)).

  // add middleware into the pipeline (evt.express.use(...)),
  // before auto registered routes are added.

  // this is also the last chance to register dependencies
  // in the ioc collection, before the container is created.
  console.log(`the root route is (${evt.root_route})`);
});

app.once(app_evt.server_starting, (evt) => {
  // use to modify the server listening configuration before it is started.

  // all auto registered routes have been added at this point.

  // you may add middleware to the app pipeline (evt.express.use(...)),
  // after the auto registered routes.

  // for example, to add error handling middleware, ...

  // push async operations (Promise) that may fetch data or
  // does some kind of i/o, ... into (evt.wait_for.push(...)).

  // the ioc container is also ready at this point.
  console.log(`the hostname is (${evt.hostname})`);
});

app.once(app_evt.server_listening, () => {
  // emitted when the server is listening
  
  // use it to perform operations after the server starts listening.
  // this is the last event from the app, when it's considered started.
});

app.start();
