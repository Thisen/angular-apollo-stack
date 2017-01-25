import { User as db } from '../connectors';

export interface IUser {
  _id?: string;
  name: string;
}

export class User {
  public static findById(id: string): Promise<IUser> {
    return db.findById(id)
      .then((user) => user);
  }

  public static create(user: IUser): Promise<IUser> {
    return db.create(user);
  }
}
