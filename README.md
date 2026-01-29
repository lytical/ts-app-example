# ts-app-example

this is an example application built with @lytical/app

it can be used as a "starter" project for your web api application.

## dependency injection

note: see npmjs project [@lytical/ioc](https://www.npmjs.com/package/@lytical/ioc)\
about the dependencies injection features that are included.

## getting started

- clone this repository: `git clone https://github.com/lytical/ts-app-example.git [name]`
- in the root folder, either open vs-code and hit run,
- or install; build and start.

```bash
npm install
npm run build
npm start
```

## local development

add an `.env.local` file to to the root, to set sensitive environmental variable, that are not included in the git repository.

```
// .env.local

PORT=4100
AzureWebJobsStorage=...
SVC_API_KEY=...
CONN_STR=...
```

- implement service; middleware; and route classes, in the folders provided, or folders of your choice.
- either, configure the folder(s) that contain your routes, in `package.json` `"main": "..."`
- or make sure the route modules are imported before  `app.starts()`

e.g.

```typescript
// src/index.ts

import './path/to/route/module(s)';
import './path/to/other/route/module(s)';

app.start();

```
