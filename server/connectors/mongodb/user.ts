import { Document, Schema } from 'mongoose';

import { IUser } from '../../models';

export interface IUserModel extends IUser, Document {
  _id: string;
}

export const UserSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
