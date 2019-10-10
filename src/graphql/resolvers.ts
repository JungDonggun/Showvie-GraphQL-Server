// import { hash, compare } from 'bcryptjs'
// import { sign } from 'jsonwebtoken'

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
	}
}

// const resolvers = {
// 	Query: {
// 		currentUser: (parent, args, { user, prisma }) => {
// 			if (!user) {
// 				throw new Error('Not Authenticated')
// 			}

// 			return prisma.user({ id: user.id })
// 		}
// 	},
// 	Mutation: {
// 		register: async (parent, { username, password }, ctx, info) => {
// 			const hashedPassword = await hash(password, 10)
// 			const user = await ctx.prisma.createUser({
// 				username,
// 				password: hashedPassword
// 			})
// 			return user
// 		},
// 		login: async (parent, { username, password }, ctx, info) => {
// 			const user = await ctx.prisma.user({ username })

// 			if (!user) {
// 				throw new Error('Invalid Login')
// 			}

// 			const passwordMatch = await compare(password, user.password)

// 			if (!passwordMatch) {
// 				throw new Error('Invalid Login')
// 			}

// 			const token = sign(
// 				{
// 					id: user.id,
// 					username: user.nickname
// 				},
// 				'my-secret-from-env-file-in-prod',
// 				{
// 					expiresIn: '1d' // token will expire in 30days
// 				}
// 			)

// 			return {
// 				token,
// 				user
// 			}
// 		}
// 	}
// }

export default resolvers
