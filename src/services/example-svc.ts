import { ioc_injectable } from "@lytical/ioc";

/**
 * a simple injectable service example
 * - services are registered in the ioc container
 * - services can be injected into route handlers, and other services, middleware, etc.
 * - services can have dependencies injected into them via constructor injection
 * - implement your business logic in services
 */
@ioc_injectable()
export class example_svc {
  async get_message() {
    return 'Hello from example_svc!';
  }

  async get_data() {
    return { message: await this.get_message() };
  }
}