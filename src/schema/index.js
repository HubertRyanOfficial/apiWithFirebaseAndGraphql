const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    username: String!
    email: String!
  }
  type Query {
    users: [User]
    user(id: String): User!
  }
  type Mutation {
    createUser(name: String, username: String, email: String): String
    deleteUser(id: String): String
    updateUser(id: String, username: String): String
  }
`;

module.exports = typeDefs;
