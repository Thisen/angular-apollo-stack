import * as Mongoose from 'mongoose';
import { IUserModel, UserSchema } from './';

export const User = Mongoose.model<IUserModel>('User', UserSchema);

export class MongoConnector {
  public readonly mongooseConnection: Promise<void>;

  constructor(mongoDbConnectionString: string) {
    this.mongooseConnection = Mongoose.connect(mongoDbConnectionString)
      .catch((error) => {
        this.log('Could not connect to MongoDB:', error);
      });
  }

  private log(message: string, ...args: Array<any>): void {
    console.log(`MongoConnector: ${message}`, ...args);
  }
}
