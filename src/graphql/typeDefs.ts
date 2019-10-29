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

    type Query {
        movieList(subjectCategory: String!, offset: Int, limit: Int): [Movies!]!
    }

    type Mutation {
        register(nickname: String!, email: String!, password: String!): User!
        login(email: String!, password: String!): LoginResponse!
    }

    type LoginResponse {
        token: String
        user: User
    }
`
export default typeDefs
