import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';

import {
  app_middleware_dependency,
  app_route,
  app_route_handler,
} from '@lytical/app';

import { ioc_inject } from '@lytical/ioc';
import { example_svc } from '../services/example-svc';
import { example_middleware_class } from '../middleware/example-mw';

/**
 * Example route class
 * - routes are auto registered from the src/routes folder and any imported modules
 * - route classes support constructor injection for dependencies
 * - routes are registered in the express application
 * - routes can have middleware dependencies injected into them via constructor injection
 * - routes can have route handlers defined via method decorators
 * - route handlers can have dependencies injected into them via method parameter injection
 * - route handler method arguments must have all dependencies listed first, followed by
 *   the standard express (Request, Response, NextFunction) parameters in that order
 * - implement your route handlers in route classes
 * - use handlers to pull data from the request, call services to perform business logic, and return responses
 */
@app_route({ route: '/example' })
export class example_route_class {
  constructor(
    @ioc_inject(example_svc) private readonly _example_svc: example_svc,
  ) {}

  @app_route_handler({
    route: '/', // /example/
    http_method: ['GET'],
  })
  async get_handler(_rqs: Request, rsp: Response, _nxt: NextFunction) {
    rsp.json({ message: await this._example_svc.get_message() }).end();
  }

  @app_route_handler({
    http_method: ['POST'],
    route: '/', // /example/
    dependency: [
      express.json(),
      app_middleware_dependency(example_middleware_class),
    ],
  })
  post_handler(_rqs: Request, rsp: Response, _nxt: NextFunction) {
    rsp.json({ body: _rqs.body, locals: rsp.locals }).end();
  }
}
