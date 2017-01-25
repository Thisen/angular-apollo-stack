export const mutationSchema = `
  # List of possible mutations
  type Mutation {
    createUser(user: InputUser!): User
  }
`;
