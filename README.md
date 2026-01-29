# ts-app-example

this is an example application built with @lytical/app

it can be used as a "starter" project for your web api application.

note: see npmjs project [@lytical/ioc](https://www.npmjs.com/package/@lytical/ioc)\
about the dependencies injection features included

## local development

add an `.env.local` file to to the root, to set sensitive environmental variable, that are not included in the git repository.

```

// .env.local

PORT=4100
AzureWebJobsStorage=...
SVC_API_KEY=...
CONN_STR=...
```