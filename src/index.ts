import { ApolloServer } from 'apollo-server'
// import { idArg, queryType, stringArg } from 'nexus'
// import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import { verify } from 'jsonwebtoken'
// import * as path from 'path'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
import { prisma } from '../prisma/generated/prisma-client'

// const getUser = (token) => {
// 	try {
// 		if (token) {
// 			return verify(token, 'my-secret-from-env-file-in-prod')
// 		}
// 	} catch (err) {
// 		console.log('getUser function Error', err)
// 		return null
// 	}
// }

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: { db: prisma }
})

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`)
})
