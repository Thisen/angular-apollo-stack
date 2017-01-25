import { IUser, User } from './../models/';

export interface ICreateUserArgument {
  name: string;
}

type CreateUserResolver = (root: Object, arg: ICreateUserArgument) => Promise<IUser>;
export const createUser: CreateUserResolver = (root, { name }) => {
  console.log('Resolver:' + root);
  console.log('Resolver: ' + name);
  return User.create({ name });
};

