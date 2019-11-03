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
        email: String!
        nickname: String!
        movieReviews: [MovieReview]
    }
    
    type Token {
        token: String!
    }

    type Query {
        movieList(subjectCategory: String!, offset: Int, limit: Int): [Movies!]!
        currentUser: User!
        getMovieTags: MovieTag!
    }

    type Mutation {
        register(nickname: String!, email: String!, password: String!): User!
        login(email: String!, password: String!): Token!
    }

    type LoginResponse {
        token: String!
        user: User!
    }
    
    type MovieTag {
        tags: String!
        madeBy: String!
    }
`

export default typeDefs
