import { User, IUser } from './../models/user';

export interface IUserArgument {
  id: string
}

type UserResolver = (root: Object, arg: IUserArgument) => Promise<IUser>;
export const getUser: UserResolver = (root, { id }) => {
  return User.findById(id);
}
