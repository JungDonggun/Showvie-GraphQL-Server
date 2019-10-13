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
		nickname: String!
		movieReviews: [MovieReview]
	}

	type Query {
		userData: User
		movieList: [MovieList]
	}

	type Mutation {
		register(nickname: String!, identity: String!, password: String!): User!
		login(identity: String!, password: String!): LoginResponse!
	}

	type LoginResponse {
		token: String
		user: User
	}
`
export default typeDefs
