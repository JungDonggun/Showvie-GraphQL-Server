import { gql } from 'apollo-server'

export const typeDefs = gql`
	type MovieReview {
		title: String!
		rating: Int!
		review: String
	}

	type MovieList {
		id: String!
		title: String!
	}

	type User {
		identity: String!
		name: String!
		movieReviews: [MovieReview]
	}

	type Query {
		userData: User
		movieList: [MovieList]
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
