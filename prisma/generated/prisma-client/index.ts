// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  movieReview: (where?: MovieReviewWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  movieReview: (
    where: MovieReviewWhereUniqueInput
  ) => MovieReviewNullablePromise;
  movieReviews: (args?: {
    where?: MovieReviewWhereInput;
    orderBy?: MovieReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<MovieReview>;
  movieReviewsConnection: (args?: {
    where?: MovieReviewWhereInput;
    orderBy?: MovieReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MovieReviewConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMovieReview: (data: MovieReviewCreateInput) => MovieReviewPromise;
  updateMovieReview: (args: {
    data: MovieReviewUpdateInput;
    where: MovieReviewWhereUniqueInput;
  }) => MovieReviewPromise;
  updateManyMovieReviews: (args: {
    data: MovieReviewUpdateManyMutationInput;
    where?: MovieReviewWhereInput;
  }) => BatchPayloadPromise;
  upsertMovieReview: (args: {
    where: MovieReviewWhereUniqueInput;
    create: MovieReviewCreateInput;
    update: MovieReviewUpdateInput;
  }) => MovieReviewPromise;
  deleteMovieReview: (where: MovieReviewWhereUniqueInput) => MovieReviewPromise;
  deleteManyMovieReviews: (
    where?: MovieReviewWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  movieReview: (
    where?: MovieReviewSubscriptionWhereInput
  ) => MovieReviewSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MovieReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "rating_ASC"
  | "rating_DESC"
  | "review_ASC"
  | "review_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "identity_ASC"
  | "identity_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface MovieReviewUpdateInput {
  title?: Maybe<String>;
  rating?: Maybe<Int>;
  review?: Maybe<String>;
}

export type MovieReviewWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MovieReviewUpdateDataInput {
  title?: Maybe<String>;
  rating?: Maybe<Int>;
  review?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  identity: String;
  name: String;
  password: String;
  movieReview?: Maybe<MovieReviewCreateManyInput>;
}

export interface MovieReviewUpdateWithWhereUniqueNestedInput {
  where: MovieReviewWhereUniqueInput;
  data: MovieReviewUpdateDataInput;
}

export interface MovieReviewSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MovieReviewWhereInput>;
  AND?: Maybe<
    MovieReviewSubscriptionWhereInput[] | MovieReviewSubscriptionWhereInput
  >;
  OR?: Maybe<
    MovieReviewSubscriptionWhereInput[] | MovieReviewSubscriptionWhereInput
  >;
  NOT?: Maybe<
    MovieReviewSubscriptionWhereInput[] | MovieReviewSubscriptionWhereInput
  >;
}

export interface MovieReviewUpdateManyInput {
  create?: Maybe<MovieReviewCreateInput[] | MovieReviewCreateInput>;
  update?: Maybe<
    | MovieReviewUpdateWithWhereUniqueNestedInput[]
    | MovieReviewUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | MovieReviewUpsertWithWhereUniqueNestedInput[]
    | MovieReviewUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<MovieReviewWhereUniqueInput[] | MovieReviewWhereUniqueInput>;
  connect?: Maybe<MovieReviewWhereUniqueInput[] | MovieReviewWhereUniqueInput>;
  set?: Maybe<MovieReviewWhereUniqueInput[] | MovieReviewWhereUniqueInput>;
  disconnect?: Maybe<
    MovieReviewWhereUniqueInput[] | MovieReviewWhereUniqueInput
  >;
  deleteMany?: Maybe<
    MovieReviewScalarWhereInput[] | MovieReviewScalarWhereInput
  >;
  updateMany?: Maybe<
    | MovieReviewUpdateManyWithWhereNestedInput[]
    | MovieReviewUpdateManyWithWhereNestedInput
  >;
}

export interface MovieReviewUpdateManyDataInput {
  title?: Maybe<String>;
  rating?: Maybe<Int>;
  review?: Maybe<String>;
}

export interface UserUpdateInput {
  identity?: Maybe<String>;
  name?: Maybe<String>;
  password?: Maybe<String>;
  movieReview?: Maybe<MovieReviewUpdateManyInput>;
}

export interface MovieReviewScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  rating?: Maybe<Int>;
  rating_not?: Maybe<Int>;
  rating_in?: Maybe<Int[] | Int>;
  rating_not_in?: Maybe<Int[] | Int>;
  rating_lt?: Maybe<Int>;
  rating_lte?: Maybe<Int>;
  rating_gt?: Maybe<Int>;
  rating_gte?: Maybe<Int>;
  review?: Maybe<String>;
  review_not?: Maybe<String>;
  review_in?: Maybe<String[] | String>;
  review_not_in?: Maybe<String[] | String>;
  review_lt?: Maybe<String>;
  review_lte?: Maybe<String>;
  review_gt?: Maybe<String>;
  review_gte?: Maybe<String>;
  review_contains?: Maybe<String>;
  review_not_contains?: Maybe<String>;
  review_starts_with?: Maybe<String>;
  review_not_starts_with?: Maybe<String>;
  review_ends_with?: Maybe<String>;
  review_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<MovieReviewScalarWhereInput[] | MovieReviewScalarWhereInput>;
  OR?: Maybe<MovieReviewScalarWhereInput[] | MovieReviewScalarWhereInput>;
  NOT?: Maybe<MovieReviewScalarWhereInput[] | MovieReviewScalarWhereInput>;
}

export interface MovieReviewWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  rating?: Maybe<Int>;
  rating_not?: Maybe<Int>;
  rating_in?: Maybe<Int[] | Int>;
  rating_not_in?: Maybe<Int[] | Int>;
  rating_lt?: Maybe<Int>;
  rating_lte?: Maybe<Int>;
  rating_gt?: Maybe<Int>;
  rating_gte?: Maybe<Int>;
  review?: Maybe<String>;
  review_not?: Maybe<String>;
  review_in?: Maybe<String[] | String>;
  review_not_in?: Maybe<String[] | String>;
  review_lt?: Maybe<String>;
  review_lte?: Maybe<String>;
  review_gt?: Maybe<String>;
  review_gte?: Maybe<String>;
  review_contains?: Maybe<String>;
  review_not_contains?: Maybe<String>;
  review_starts_with?: Maybe<String>;
  review_not_starts_with?: Maybe<String>;
  review_ends_with?: Maybe<String>;
  review_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<MovieReviewWhereInput[] | MovieReviewWhereInput>;
  OR?: Maybe<MovieReviewWhereInput[] | MovieReviewWhereInput>;
  NOT?: Maybe<MovieReviewWhereInput[] | MovieReviewWhereInput>;
}

export interface MovieReviewUpdateManyMutationInput {
  title?: Maybe<String>;
  rating?: Maybe<Int>;
  review?: Maybe<String>;
}

export interface MovieReviewCreateManyInput {
  create?: Maybe<MovieReviewCreateInput[] | MovieReviewCreateInput>;
  connect?: Maybe<MovieReviewWhereUniqueInput[] | MovieReviewWhereUniqueInput>;
}

export interface MovieReviewCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  rating?: Maybe<Int>;
  review?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  identity?: Maybe<String>;
  identity_not?: Maybe<String>;
  identity_in?: Maybe<String[] | String>;
  identity_not_in?: Maybe<String[] | String>;
  identity_lt?: Maybe<String>;
  identity_lte?: Maybe<String>;
  identity_gt?: Maybe<String>;
  identity_gte?: Maybe<String>;
  identity_contains?: Maybe<String>;
  identity_not_contains?: Maybe<String>;
  identity_starts_with?: Maybe<String>;
  identity_not_starts_with?: Maybe<String>;
  identity_ends_with?: Maybe<String>;
  identity_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  movieReview_every?: Maybe<MovieReviewWhereInput>;
  movieReview_some?: Maybe<MovieReviewWhereInput>;
  movieReview_none?: Maybe<MovieReviewWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  identity?: Maybe<String>;
}>;

export interface MovieReviewUpdateManyWithWhereNestedInput {
  where: MovieReviewScalarWhereInput;
  data: MovieReviewUpdateManyDataInput;
}

export interface UserUpdateManyMutationInput {
  identity?: Maybe<String>;
  name?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface MovieReviewUpsertWithWhereUniqueNestedInput {
  where: MovieReviewWhereUniqueInput;
  update: MovieReviewUpdateDataInput;
  create: MovieReviewCreateInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  identity: String;
  name: String;
  password: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  identity: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  identity: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateMovieReview {
  count: Int;
}

export interface AggregateMovieReviewPromise
  extends Promise<AggregateMovieReview>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMovieReviewSubscription
  extends Promise<AsyncIterator<AggregateMovieReview>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MovieReviewSubscriptionPayload {
  mutation: MutationType;
  node: MovieReview;
  updatedFields: String[];
  previousValues: MovieReviewPreviousValues;
}

export interface MovieReviewSubscriptionPayloadPromise
  extends Promise<MovieReviewSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MovieReviewPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MovieReviewPreviousValuesPromise>() => T;
}

export interface MovieReviewSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MovieReviewSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MovieReviewSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MovieReviewPreviousValuesSubscription>() => T;
}

export interface MovieReviewEdge {
  node: MovieReview;
  cursor: String;
}

export interface MovieReviewEdgePromise
  extends Promise<MovieReviewEdge>,
    Fragmentable {
  node: <T = MovieReviewPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MovieReviewEdgeSubscription
  extends Promise<AsyncIterator<MovieReviewEdge>>,
    Fragmentable {
  node: <T = MovieReviewSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MovieReview {
  id: ID_Output;
  title: String;
  rating: Int;
  review?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface MovieReviewPromise extends Promise<MovieReview>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  rating: () => Promise<Int>;
  review: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface MovieReviewSubscription
  extends Promise<AsyncIterator<MovieReview>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  review: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface MovieReviewNullablePromise
  extends Promise<MovieReview | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  rating: () => Promise<Int>;
  review: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface MovieReviewConnection {
  pageInfo: PageInfo;
  edges: MovieReviewEdge[];
}

export interface MovieReviewConnectionPromise
  extends Promise<MovieReviewConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MovieReviewEdge>>() => T;
  aggregate: <T = AggregateMovieReviewPromise>() => T;
}

export interface MovieReviewConnectionSubscription
  extends Promise<AsyncIterator<MovieReviewConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MovieReviewEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMovieReviewSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MovieReviewPreviousValues {
  id: ID_Output;
  title: String;
  rating: Int;
  review?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface MovieReviewPreviousValuesPromise
  extends Promise<MovieReviewPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  rating: () => Promise<Int>;
  review: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface MovieReviewPreviousValuesSubscription
  extends Promise<AsyncIterator<MovieReviewPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  review: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  identity: String;
  name: String;
  password: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  identity: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  movieReview: <T = FragmentableArray<MovieReview>>(args?: {
    where?: MovieReviewWhereInput;
    orderBy?: MovieReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  identity: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  movieReview: <T = Promise<AsyncIterator<MovieReviewSubscription>>>(args?: {
    where?: MovieReviewWhereInput;
    orderBy?: MovieReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  identity: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  movieReview: <T = FragmentableArray<MovieReview>>(args?: {
    where?: MovieReviewWhereInput;
    orderBy?: MovieReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "MovieReview",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();