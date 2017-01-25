import { createUser } from './mutation';
import { getUser } from './query';

export class Resolvers {
  public getAll() {
    const Query = {
      getUser
    };

    const Mutation = {
      createUser
    };

    return {
      Query,
      Mutation
    }
  }
}
