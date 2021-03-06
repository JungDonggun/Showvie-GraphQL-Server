/* eslint-disable max-len */
import axios from 'axios'
import API from '../API'
import { prisma } from '../../prisma/generated/prisma-client'
import { movieType } from '../../lib/types/movie'

const TIMER = 0.5 // 초 단위

const parsedDataInDatabase = (parsedData) => {
	try {
		const isWork = parsedData.map(async (movieData: movieType) => {
			const {
				title,
				alternativeTitle,
				description,
				language,
				regDate,
				referenceIdentifier,
				rights,
				extent,
				subjectCategory,
				person
			} = movieData

			const splitData = (text: string) => {
				return text.split(':')[1].replace(' ', '')
			}

			const anyToString = (text: any) => {
				return text.toString()
			}

			const movie = await prisma.$exists.movieList({ title: anyToString(title) })

			if (!movie) {
				const createMovies = await prisma.createMovieList({
					title: anyToString(title),
					alternativeTitle: alternativeTitle && anyToString(alternativeTitle),
					description: splitData(description),
					extent: splitData(extent),
					language,
					regDate,
					person: splitData(person),
					referenceIdentifier,
					rights: rights && anyToString(rights),
					subjectCategory: splitData(subjectCategory)
				})

				return createMovies
			} else {
				return null
			}
		})

		return Promise.all(isWork)
			.then(() => Promise.resolve(true))
			.catch((err) => Promise.reject(err))
	} catch {
		console.log('Movie Parser가 종료되었습니다.')
	}
}

const getMovieList = async (rowCount = 100, page = 1) => {
	const response = await axios.get(`${API}?numOfRows=${rowCount}&pageNo=${page}`)

	try {
		const parsedData = response.data.response.body.items.item

		const saveInDatabase = await parsedDataInDatabase(parsedData)

		if (saveInDatabase) {
			setTimeout(() => {
				getMovieList(rowCount, page + 1)
				console.log(`${page} 페이지를 DataBase에 저장했습니다.`)
			}, TIMER * 1000)
		}
	} catch (err) {
		console.error('MovieList Parse Error', err.message)
	}
}

export default getMovieList
