import { gql } from 'apollo-server'

export const typeDefs = gql`
	type User {
		id: ID!
		identity: String!
		name: String!
		movieReviews: [MovieReview]
	}

	type MovieReview {
		id: ID!
		title: String!
		rating: Int!
		review: String
	}

	type Query {
		currentUser: User!
		test: User
	}

	type Mutation {
		register(username: String!, password: String!): User!
		login(username: String!, password: String!): LoginResponse!
	}

	type LoginResponse {
		token: String
		user: User
	}
`
export default typeDefs
