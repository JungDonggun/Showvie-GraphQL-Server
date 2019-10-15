import { gql } from 'apollo-server'

export const typeDefs = gql`
	type MovieReview {
		title: String!
		rating: Int!
		review: String
	}

	type Movies {
		id: String!
		movieNm: String!
		movieNmEn: String!
		prdtYear: String!
		openDt: String!
		prdtStatNm: String!
		nationAlt: String!
		genreAlt: String!
		repNationNm: String!
		directors: String!
	}

	type User {
		identity: String!
		nickname: String!
		movieReviews: [MovieReview]
	}

	type Query {
		movieList(genreAlt: String!): [Movies!]!
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
