import { Server } from './Server';

export class App {
  private server?: Server;

  async start() {
    const port = process.env.PORT || '3001';
    this.server = new Server(port);
    return this.server.listen();
  }

  async stop() {
    await this.server?.stop();
  }

  get port(): string {
    if (!this.server) {
      throw new Error('Backoffice backend application has not been started');
    }
    return this.server.port;
  }

  get httpServer() {
    return this.server?.httpServer;
  }

}