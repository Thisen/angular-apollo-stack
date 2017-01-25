import * as Mongoose from 'mongoose';

import { IUser } from '../../models';

export interface IUserModel extends IUser, Mongoose.Document {
  _id: string;
}

const UserSchema: Mongoose.Schema = new Mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  },
);

export const User = Mongoose.model<IUserModel>('User', UserSchema);
