import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';

import { AppConfig } from './services/appConfig.service';
import { MongoConnector } from './connectors/mongodb/mongoConnector';
import { GraphQLServer } from './graphql';

// Set mongoose promise implementation to native Node promises
(mongoose as any).Promise = global.Promise;

export class Server {

  public expressServer: express.Express;

  private readonly appConfig: AppConfig;

  /**
   * Server entry point.
   */
  constructor() {
    this.appConfig = new AppConfig();
    this.expressServer = express();
    this.setupMiddleware();

    const mongoConnector = new MongoConnector(this.appConfig.mongoDbUrl);
    mongoConnector.mongooseConnection
      .then(() => {
        const graphqlServer = new GraphQLServer(this.expressServer, this.appConfig.graphQLPort); // tslint:disable-line
      });
  }

  private setupMiddleware(): void {
    this.expressServer.use(bodyParser.urlencoded({extended: true}));
    this.expressServer.use(bodyParser.json());
  }
}

export const server = http.createServer(new Server().expressServer);
