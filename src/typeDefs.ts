export const UserWithTypeDefs = `type User {
  id: ID!
  username: String!
}`

export const QueryWithTypeDefs = `type Query {
  currentUser: User!
}`

export const MutationWithTypeDefs = `type Mutation {
  register(username: String!, password: String!): User!
  login(username: String!, password: String!): LoginResponse!
}`

export const LoginResponserWithTypeDefs = `type LoginResponse {
  token: String
  user: User
}`
