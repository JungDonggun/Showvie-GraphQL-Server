let prisma = {}

async function main() {
	await prisma.createUser({
		identity: 'admin',
		name: '어드민',
		password: '7060182FE1BB70D4074D1FA6E260A2F55A280751A7B27B608FD5F35A2EAAEB05',
		movieReviews: {
			create: {
				title: 'The Hunger Games Mockingjay Part 2',
				rating: 3,
				review: '재밌어요'
			}
		}
	})
}

main()
