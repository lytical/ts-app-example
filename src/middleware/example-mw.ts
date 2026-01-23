import type { Request, Response, NextFunction } from "express";

import { ioc_inject } from "@lytical/ioc";
import { example_svc } from "../services/example-svc";

/**
 * Example middleware class
 */
export class example_middleware_class {
  constructor(@ioc_inject(example_svc) private readonly _example_svc: example_svc) {}

  async default(_rqs: Request, rsp: Response, nxt: NextFunction) {
    console.debug('example middleware invoked');
    rsp.locals.example_middleware_data = await this._example_svc.get_data();
    // make sure to call nxt() to continue the request processing pipeline
    nxt();
  }
}
