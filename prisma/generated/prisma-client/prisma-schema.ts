// Code generated by Prisma (prisma@1.36.0-alpha.11). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateMovieList {
  count: Int!
}

type AggregateMovieReview {
  count: Int!
}

type AggregatemovieTag {
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

type MovieList {
  id: ID!
  title: String!
  description: String
  splitData: String
  alternativeTitle: String
  extent: String
  language: String
  regDate: DateTime
  person: String
  referenceIdentifier: String
  rights: String
  subjectCategory: String
}

type MovieListConnection {
  pageInfo: PageInfo!
  edges: [MovieListEdge]!
  aggregate: AggregateMovieList!
}

input MovieListCreateInput {
  id: ID
  title: String!
  description: String
  splitData: String
  alternativeTitle: String
  extent: String
  language: String
  regDate: DateTime
  person: String
  referenceIdentifier: String
  rights: String
  subjectCategory: String
}

type MovieListEdge {
  node: MovieList!
  cursor: String!
}

enum MovieListOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  splitData_ASC
  splitData_DESC
  alternativeTitle_ASC
  alternativeTitle_DESC
  extent_ASC
  extent_DESC
  language_ASC
  language_DESC
  regDate_ASC
  regDate_DESC
  person_ASC
  person_DESC
  referenceIdentifier_ASC
  referenceIdentifier_DESC
  rights_ASC
  rights_DESC
  subjectCategory_ASC
  subjectCategory_DESC
}

type MovieListPreviousValues {
  id: ID!
  title: String!
  description: String
  splitData: String
  alternativeTitle: String
  extent: String
  language: String
  regDate: DateTime
  person: String
  referenceIdentifier: String
  rights: String
  subjectCategory: String
}

type MovieListSubscriptionPayload {
  mutation: MutationType!
  node: MovieList
  updatedFields: [String!]
  previousValues: MovieListPreviousValues
}

input MovieListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieListWhereInput
  AND: [MovieListSubscriptionWhereInput!]
  OR: [MovieListSubscriptionWhereInput!]
  NOT: [MovieListSubscriptionWhereInput!]
}

input MovieListUpdateInput {
  title: String
  description: String
  splitData: String
  alternativeTitle: String
  extent: String
  language: String
  regDate: DateTime
  person: String
  referenceIdentifier: String
  rights: String
  subjectCategory: String
}

input MovieListUpdateManyMutationInput {
  title: String
  description: String
  splitData: String
  alternativeTitle: String
  extent: String
  language: String
  regDate: DateTime
  person: String
  referenceIdentifier: String
  rights: String
  subjectCategory: String
}

input MovieListWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  splitData: String
  splitData_not: String
  splitData_in: [String!]
  splitData_not_in: [String!]
  splitData_lt: String
  splitData_lte: String
  splitData_gt: String
  splitData_gte: String
  splitData_contains: String
  splitData_not_contains: String
  splitData_starts_with: String
  splitData_not_starts_with: String
  splitData_ends_with: String
  splitData_not_ends_with: String
  alternativeTitle: String
  alternativeTitle_not: String
  alternativeTitle_in: [String!]
  alternativeTitle_not_in: [String!]
  alternativeTitle_lt: String
  alternativeTitle_lte: String
  alternativeTitle_gt: String
  alternativeTitle_gte: String
  alternativeTitle_contains: String
  alternativeTitle_not_contains: String
  alternativeTitle_starts_with: String
  alternativeTitle_not_starts_with: String
  alternativeTitle_ends_with: String
  alternativeTitle_not_ends_with: String
  extent: String
  extent_not: String
  extent_in: [String!]
  extent_not_in: [String!]
  extent_lt: String
  extent_lte: String
  extent_gt: String
  extent_gte: String
  extent_contains: String
  extent_not_contains: String
  extent_starts_with: String
  extent_not_starts_with: String
  extent_ends_with: String
  extent_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  regDate: DateTime
  regDate_not: DateTime
  regDate_in: [DateTime!]
  regDate_not_in: [DateTime!]
  regDate_lt: DateTime
  regDate_lte: DateTime
  regDate_gt: DateTime
  regDate_gte: DateTime
  person: String
  person_not: String
  person_in: [String!]
  person_not_in: [String!]
  person_lt: String
  person_lte: String
  person_gt: String
  person_gte: String
  person_contains: String
  person_not_contains: String
  person_starts_with: String
  person_not_starts_with: String
  person_ends_with: String
  person_not_ends_with: String
  referenceIdentifier: String
  referenceIdentifier_not: String
  referenceIdentifier_in: [String!]
  referenceIdentifier_not_in: [String!]
  referenceIdentifier_lt: String
  referenceIdentifier_lte: String
  referenceIdentifier_gt: String
  referenceIdentifier_gte: String
  referenceIdentifier_contains: String
  referenceIdentifier_not_contains: String
  referenceIdentifier_starts_with: String
  referenceIdentifier_not_starts_with: String
  referenceIdentifier_ends_with: String
  referenceIdentifier_not_ends_with: String
  rights: String
  rights_not: String
  rights_in: [String!]
  rights_not_in: [String!]
  rights_lt: String
  rights_lte: String
  rights_gt: String
  rights_gte: String
  rights_contains: String
  rights_not_contains: String
  rights_starts_with: String
  rights_not_starts_with: String
  rights_ends_with: String
  rights_not_ends_with: String
  subjectCategory: String
  subjectCategory_not: String
  subjectCategory_in: [String!]
  subjectCategory_not_in: [String!]
  subjectCategory_lt: String
  subjectCategory_lte: String
  subjectCategory_gt: String
  subjectCategory_gte: String
  subjectCategory_contains: String
  subjectCategory_not_contains: String
  subjectCategory_starts_with: String
  subjectCategory_not_starts_with: String
  subjectCategory_ends_with: String
  subjectCategory_not_ends_with: String
  AND: [MovieListWhereInput!]
  OR: [MovieListWhereInput!]
  NOT: [MovieListWhereInput!]
}

input MovieListWhereUniqueInput {
  id: ID
}

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

type movieTag {
  id: ID!
  tags: String!
}

type movieTagConnection {
  pageInfo: PageInfo!
  edges: [movieTagEdge]!
  aggregate: AggregatemovieTag!
}

input movieTagCreateInput {
  id: ID
  tags: String!
}

type movieTagEdge {
  node: movieTag!
  cursor: String!
}

enum movieTagOrderByInput {
  id_ASC
  id_DESC
  tags_ASC
  tags_DESC
}

type movieTagPreviousValues {
  id: ID!
  tags: String!
}

type movieTagSubscriptionPayload {
  mutation: MutationType!
  node: movieTag
  updatedFields: [String!]
  previousValues: movieTagPreviousValues
}

input movieTagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: movieTagWhereInput
  AND: [movieTagSubscriptionWhereInput!]
  OR: [movieTagSubscriptionWhereInput!]
  NOT: [movieTagSubscriptionWhereInput!]
}

input movieTagUpdateInput {
  tags: String
}

input movieTagUpdateManyMutationInput {
  tags: String
}

input movieTagWhereInput {
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
  tags: String
  tags_not: String
  tags_in: [String!]
  tags_not_in: [String!]
  tags_lt: String
  tags_lte: String
  tags_gt: String
  tags_gte: String
  tags_contains: String
  tags_not_contains: String
  tags_starts_with: String
  tags_not_starts_with: String
  tags_ends_with: String
  tags_not_ends_with: String
  AND: [movieTagWhereInput!]
  OR: [movieTagWhereInput!]
  NOT: [movieTagWhereInput!]
}

input movieTagWhereUniqueInput {
  id: ID
}

type Mutation {
  createMovieList(data: MovieListCreateInput!): MovieList!
  updateMovieList(data: MovieListUpdateInput!, where: MovieListWhereUniqueInput!): MovieList
  updateManyMovieLists(data: MovieListUpdateManyMutationInput!, where: MovieListWhereInput): BatchPayload!
  upsertMovieList(where: MovieListWhereUniqueInput!, create: MovieListCreateInput!, update: MovieListUpdateInput!): MovieList!
  deleteMovieList(where: MovieListWhereUniqueInput!): MovieList
  deleteManyMovieLists(where: MovieListWhereInput): BatchPayload!
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
  createmovieTag(data: movieTagCreateInput!): movieTag!
  updatemovieTag(data: movieTagUpdateInput!, where: movieTagWhereUniqueInput!): movieTag
  updateManymovieTags(data: movieTagUpdateManyMutationInput!, where: movieTagWhereInput): BatchPayload!
  upsertmovieTag(where: movieTagWhereUniqueInput!, create: movieTagCreateInput!, update: movieTagUpdateInput!): movieTag!
  deletemovieTag(where: movieTagWhereUniqueInput!): movieTag
  deleteManymovieTags(where: movieTagWhereInput): BatchPayload!
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
  movieList(where: MovieListWhereUniqueInput!): MovieList
  movieLists(where: MovieListWhereInput, orderBy: MovieListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieList]!
  movieListsConnection(where: MovieListWhereInput, orderBy: MovieListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieListConnection!
  movieReview(where: MovieReviewWhereUniqueInput!): MovieReview
  movieReviews(where: MovieReviewWhereInput, orderBy: MovieReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieReview]!
  movieReviewsConnection(where: MovieReviewWhereInput, orderBy: MovieReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieReviewConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  movieTag(where: movieTagWhereUniqueInput!): movieTag
  movieTags(where: movieTagWhereInput, orderBy: movieTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [movieTag]!
  movieTagsConnection(where: movieTagWhereInput, orderBy: movieTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): movieTagConnection!
  node(id: ID!): Node
}

type Subscription {
  movieList(where: MovieListSubscriptionWhereInput): MovieListSubscriptionPayload
  movieReview(where: MovieReviewSubscriptionWhereInput): MovieReviewSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  movieTag(where: movieTagSubscriptionWhereInput): movieTagSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  nickname: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  movieReviews(where: MovieReviewWhereInput, orderBy: MovieReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieReview!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  nickname: String!
  password: String!
  movieReviews: MovieReviewCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  nickname_ASC
  nickname_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  nickname: String!
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
  email: String
  nickname: String
  password: String
  movieReviews: MovieReviewUpdateManyInput
}

input UserUpdateManyMutationInput {
  email: String
  nickname: String
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
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
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
  movieReviews_every: MovieReviewWhereInput
  movieReviews_some: MovieReviewWhereInput
  movieReviews_none: MovieReviewWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`