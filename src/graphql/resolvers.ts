import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { get } from 'config'

// Resolver란, query에서 특정 필드에 대한 요청이 있을 때, 그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할을 합니다.
const resolvers = {
  Query: {
    currentUser: async (parent, args, { user, prisma }) => {
      if (!user) {
        throw new Error('Not Authenticated')
      }

      return await prisma.user({ email: user.email })
    },
    movieList: async (parent, { subjectCategory, limit }, context, info) => {
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
    },
    getMovieTags: async (parent, args, context, info) => {
      const getMovieTag = await context.prisma.movieTag({ madeBy: 'admin' })


      return getMovieTag
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
          expiresIn: '1d'
        }
      )

      return {
        token
      }
    }
  }
}

export default resolvers
