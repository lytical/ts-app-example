import { ioc_injectable } from "@lytical/ioc";

@ioc_injectable()
export class example_svc {
  async get_message() {
    return 'Hello from example_svc!';
  }

  async get_data() {
    return { message: await this.get_message() };
  }
}