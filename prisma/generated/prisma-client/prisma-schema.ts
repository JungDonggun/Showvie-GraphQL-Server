// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateMovieReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type MovieReview {
  id: ID!
  title: String!
  rating: Int!
  review: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MovieReviewConnection {
  pageInfo: PageInfo!
  edges: [MovieReviewEdge]!
  aggregate: AggregateMovieReview!
}

input MovieReviewCreateInput {
  id: ID
  title: String!
  rating: Int
  review: String
}

input MovieReviewCreateManyInput {
  create: [MovieReviewCreateInput!]
  connect: [MovieReviewWhereUniqueInput!]
}

type MovieReviewEdge {
  node: MovieReview!
  cursor: String!
}

enum MovieReviewOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  rating_ASC
  rating_DESC
  review_ASC
  review_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MovieReviewPreviousValues {
  id: ID!
  title: String!
  rating: Int!
  review: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MovieReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  review: String
  review_not: String
  review_in: [String!]
  review_not_in: [String!]
  review_lt: String
  review_lte: String
  review_gt: String
  review_gte: String
  review_contains: String
  review_not_contains: String
  review_starts_with: String
  review_not_starts_with: String
  review_ends_with: String
  review_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MovieReviewScalarWhereInput!]
  OR: [MovieReviewScalarWhereInput!]
  NOT: [MovieReviewScalarWhereInput!]
}

type MovieReviewSubscriptionPayload {
  mutation: MutationType!
  node: MovieReview
  updatedFields: [String!]
  previousValues: MovieReviewPreviousValues
}

input MovieReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieReviewWhereInput
  AND: [MovieReviewSubscriptionWhereInput!]
  OR: [MovieReviewSubscriptionWhereInput!]
  NOT: [MovieReviewSubscriptionWhereInput!]
}

input MovieReviewUpdateDataInput {
  title: String
  rating: Int
  review: String
}

input MovieReviewUpdateInput {
  title: String
  rating: Int
  review: String
}

input MovieReviewUpdateManyDataInput {
  title: String
  rating: Int
  review: String
}

input MovieReviewUpdateManyInput {
  create: [MovieReviewCreateInput!]
  update: [MovieReviewUpdateWithWhereUniqueNestedInput!]
  upsert: [MovieReviewUpsertWithWhereUniqueNestedInput!]
  delete: [MovieReviewWhereUniqueInput!]
  connect: [MovieReviewWhereUniqueInput!]
  set: [MovieReviewWhereUniqueInput!]
  disconnect: [MovieReviewWhereUniqueInput!]
  deleteMany: [MovieReviewScalarWhereInput!]
  updateMany: [MovieReviewUpdateManyWithWhereNestedInput!]
}

input MovieReviewUpdateManyMutationInput {
  title: String
  rating: Int
  review: String
}

input MovieReviewUpdateManyWithWhereNestedInput {
  where: MovieReviewScalarWhereInput!
  data: MovieReviewUpdateManyDataInput!
}

input MovieReviewUpdateWithWhereUniqueNestedInput {
  where: MovieReviewWhereUniqueInput!
  data: MovieReviewUpdateDataInput!
}

input MovieReviewUpsertWithWhereUniqueNestedInput {
  where: MovieReviewWhereUniqueInput!
  update: MovieReviewUpdateDataInput!
  create: MovieReviewCreateInput!
}

input MovieReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  review: String
  review_not: String
  review_in: [String!]
  review_not_in: [String!]
  review_lt: String
  review_lte: String
  review_gt: String
  review_gte: String
  review_contains: String
  review_not_contains: String
  review_starts_with: String
  review_not_starts_with: String
  review_ends_with: String
  review_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MovieReviewWhereInput!]
  OR: [MovieReviewWhereInput!]
  NOT: [MovieReviewWhereInput!]
}

input MovieReviewWhereUniqueInput {
  id: ID
}

type Mutation {
  createMovieReview(data: MovieReviewCreateInput!): MovieReview!
  updateMovieReview(data: MovieReviewUpdateInput!, where: MovieReviewWhereUniqueInput!): MovieReview
  updateManyMovieReviews(data: MovieReviewUpdateManyMutationInput!, where: MovieReviewWhereInput): BatchPayload!
  upsertMovieReview(where: MovieReviewWhereUniqueInput!, create: MovieReviewCreateInput!, update: MovieReviewUpdateInput!): MovieReview!
  deleteMovieReview(where: MovieReviewWhereUniqueInput!): MovieReview
  deleteManyMovieReviews(where: MovieReviewWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  movieReview(where: MovieReviewWhereUniqueInput!): MovieReview
  movieReviews(where: MovieReviewWhereInput, orderBy: MovieReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieReview]!
  movieReviewsConnection(where: MovieReviewWhereInput, orderBy: MovieReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieReviewConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  movieReview(where: MovieReviewSubscriptionWhereInput): MovieReviewSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  identity: String!
  name: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  movieReview(where: MovieReviewWhereInput, orderBy: MovieReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieReview!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  identity: String!
  name: String!
  password: String!
  movieReview: MovieReviewCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  identity_ASC
  identity_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  identity: String!
  name: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  identity: String
  name: String
  password: String
  movieReview: MovieReviewUpdateManyInput
}

input UserUpdateManyMutationInput {
  identity: String
  name: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  identity: String
  identity_not: String
  identity_in: [String!]
  identity_not_in: [String!]
  identity_lt: String
  identity_lte: String
  identity_gt: String
  identity_gte: String
  identity_contains: String
  identity_not_contains: String
  identity_starts_with: String
  identity_not_starts_with: String
  identity_ends_with: String
  identity_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  movieReview_every: MovieReviewWhereInput
  movieReview_some: MovieReviewWhereInput
  movieReview_none: MovieReviewWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  identity: String
}
`