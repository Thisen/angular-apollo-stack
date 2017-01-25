import { IUser, User } from './../models/user';

export interface IUserArgument {
  id: string;
}

type UserResolver = (root: Object, arg: IUserArgument) => Promise<IUser>;
export const getUser: UserResolver = (_, { id }) => {
  console.log(_);
  console.log(id);
  return User.findById(id);
};
