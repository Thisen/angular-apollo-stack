import { IUser, User } from './../models/';

export interface IInputUserArgument {
  user: IUser;
}

type CreateUserResolver = (root: any, arg: IInputUserArgument) => Promise<IUser>;
export const createUser: CreateUserResolver = (root, { user }) => {
  console.log(user);
  return User.create(user);
};
