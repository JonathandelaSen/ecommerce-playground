import bodyParser from 'body-parser';
import express, { Router } from 'express';
import helmet from 'helmet';
import * as http from 'http';
import { register as productsRegisterRoutes } from '../shop/products/infrastructure/routes';
import container from '../shared/dependency-injector';


export class Server {

    httpServer?: http.Server;
    readonly port: string;

    private express: express.Express;
    private logger: Logger;


    constructor(port: string) {
        this.port = port;
        this.logger = container.get('Shared.Logger');
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(helmet.xssFilter());
        this.express.use(helmet.noSniff());
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({ action: 'deny' }));
        this.setRouter()
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.express.listen(this.port, () => {
                this.logger.info(
                    `Backoffice Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
                );
                this.logger.info('  Press CTRL-C to stop\n');
                resolve();
            });
        });
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
              this.httpServer.close(error => {
                if (error) {
                  return reject(error);
                }
                return resolve();
              });
            }
            return resolve();
        });
    }

     private setRouter(): void  {
        const router = Router();
        this.express.use(router);
        productsRegisterRoutes(router)
    }
}
