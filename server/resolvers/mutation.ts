import { User, IUser } from './../models/';

export interface ICreateUserArgument {
  name: string
}

type CreateUserResolver = (root: Object, arg: ICreateUserArgument) => Promise<IUser>;
export const createUser: CreateUserResolver = (root, { name }) => {
  return User.create({ name });
}

