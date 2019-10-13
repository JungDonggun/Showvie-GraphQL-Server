import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

// Resolver란, query에서 특정 필드에 대한 요청이 있을 때, 그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할을 합니다.
const resolvers = {
	Query: {
		userData: () => {
			return {
				identity: 'admin',
				name: '어드민',
				movieReviews: [
					{
						title: 'The Hunger Games Mockingjay Part 2',
						rating: 3,
						review: '재밌어요'
					}
				]
			}
		},
		movieList: () => {
			return [
				{
					id: '1',
					title: 'test1'
				},
				{
					id: '2',
					title: 'test2'
				}
			]
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

			const token = sign(
				{
					identity: user.identity,
					nickname: user.nickname
				},
				'showvie-secret-from-env-file-in-prod',
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
