export const userSchema = `
  # User type
  type User {
    # Unique user id.
    _id: String,
    # Username
    name: String
  }

  # Input type for creating new users
  input InputUser {
    # Users name
    name: String!
  }
`;
