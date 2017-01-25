import * as Mongoose from 'mongoose';

export class MongoConnector {
  public readonly mongooseConnection: Promise<void>;

  constructor(mongoDbConnectionString: string) {
    this.mongooseConnection = Mongoose.connect(mongoDbConnectionString)
      .catch((error) => {
        this.log('Could not connect to MongoDB:', error);
      });
  }

  private log(message: string, ...args: any[]): void {
    console.log(`MongoConnector: ${message}`, ...args);
  }
}
