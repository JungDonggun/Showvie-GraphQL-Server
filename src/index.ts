import { ApolloServer } from 'apollo-server'
import { verify } from 'jsonwebtoken'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
import { prisma } from '../prisma/generated/prisma-client'
import { get } from 'config'

const getUser = (token) => {
	try {
		const secret = get('Customer.secret.privateKey')

		return token && verify(token, secret)
	} catch (err) {
		console.log(`getUser Function Error => ${err.message}`)
		return null
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		const tokenWithBearer = req.headers.authorization || ''
		const token = tokenWithBearer.split(' ')[1]
		const user = getUser(token)

		console.log({
			tokenWithBearer,
			user
		})

		return { user, prisma }
	}
})

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`)
})
