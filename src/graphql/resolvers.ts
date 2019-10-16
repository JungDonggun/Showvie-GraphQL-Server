import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { get } from 'config'

// Resolver란, query에서 특정 필드에 대한 요청이 있을 때, 그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할을 합니다.
const resolvers = {
	Query: {
		movieList: async (parent, { genreAlt, startIndex, lastIndex }, context, info) => {
			const movieList = await context.prisma.movieLists()
			const filteredMovieList = movieList
				.filter((word) => word.genreAlt.indexOf(genreAlt) === 0)
				.splice(startIndex, lastIndex)

			return filteredMovieList
		}
	},
	Mutation: {
		register: async (parent, { nickname, identity, password }, ctx, info) => {
			const hashedPassword = await hash(password, 10)
			const user = await ctx.prisma.createUser({
				nickname,
				identity,
				password: hashedPassword
			})

			return user
		},
		login: async (parent, { identity, password }, ctx, info) => {
			const user = await ctx.user({ identity })

			if (!user) {
				throw new Error('Invalid Login')
			}

			const passwordWatch = await compare(password, user.password)

			if (!passwordWatch) {
				throw new Error('Invalid Login')
			}

			const secret = get('Customer.secret.privateKey')

			const token = sign(
				{
					identity: user.identity,
					nickname: user.nickname
				},
				secret,
				{
					expires: '1m'
				}
			)

			return {
				token,
				user
			}
		}
	}
}

export default resolvers
