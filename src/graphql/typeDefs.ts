import { gql } from 'apollo-server'

export const typeDefs = gql`
	type MovieReview {
		title: String!
		rating: Int!
		review: String
	}

	type Movies {
		id: String!
		title: String!
		description: String
		splitData: String
		alternativeTitle: String
		extent: String
		language: String
		regDate: String
		person: String
		referenceIdentifier: String
		rights: String
		subjectCategory: String
	}

	type User {
		identity: String!
		nickname: String!
		movieReviews: [MovieReview]
	}

	type Query {
		movieList(genreAlt: String!, startIndex: Int, lastIndex: Int): [Movies!]!
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
