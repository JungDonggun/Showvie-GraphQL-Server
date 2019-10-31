import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { get } from 'config'

// Resolver란, query에서 특정 필드에 대한 요청이 있을 때, 그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할을 합니다.
const resolvers = {
    Query: {
        currentUser: (parent, args, { user, prisma }) => {
            // this if statement is our authentication check
            if (!user) {
                throw new Error('Not Authenticated')
            }

            console.log('in currentUser query =>', user)

            return prisma.user({ id: user.id })
        },
        movieList: async (parent, { subjectCategory, limit }, context, info) => {
            console.log('Start at movieList', {
                subjectCategory,
                limit
            })

            const getMovieList = await context.prisma.movieLists({
                orderBy: 'regDate_ASC',
                skip: limit - 10,
                last: limit,
                where: {
                    referenceIdentifier_not: '',
                    subjectCategory_contains: subjectCategory
                }
            })

            return getMovieList
        }
    },
    Mutation: {
        register: async (parent, { nickname, email, password }, ctx, info) => {
            const hashedPassword = await hash(password, 10)
            const user = await ctx.prisma.createUser({
                nickname,
                email,
                password: hashedPassword
            })

            return user
        },
        login: async (parent, { email, password }, ctx, info) => {
            const user = await ctx.prisma.user({ email })

            if (!user) {
                throw new Error('Invalid Login')
            }

            console.log('user.password =>', user.password)

            const passwordWatch = await compare(password, user.password)

            if (!passwordWatch) {
                throw new Error('Invalid Login')
            }

            const secret = get('Customer.secret.privateKey')

            const token = sign(
                {
                    email: user.email,
                    nickname: user.nickname
                },
                secret,
                {
                    expiresIn: '1h'
                }
            )

            console.log('token', user)

            return {
                token,
                user
            }
        }
    }
}

export default resolvers
