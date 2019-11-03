import { prisma } from './generated/prisma-client'

async function main() {
	await prisma.createUser({
		email: 'admin@admin.co.kr',
		nickname: '관리자',
		password: '7060182FE1BB70D4074D1FA6E260A2F55A280751A7B27B608FD5F35A2EAAEB05',
		movieReviews: {
			create: {
				title: 'The Hunger Games Mockingjay Part 2',
				rating: 3,
				review: '재밌어요'
			}
		}
	})

	await prisma.createmovieTag({
		tags: '음악,로맨스,코미디,호러,액션,판타지,SF,애니메이션,스포츠,뮤지컬,추리,스릴러',
    madeBy: 'admin'
	})

	console.log('created seed Data')
}

export default main()
