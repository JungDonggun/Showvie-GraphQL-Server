/* eslint-disable max-len */
import axios from 'axios'
import API from '../API'
import { prisma } from '../../prisma/generated/prisma-client'
import { movieType } from '../../lib/types/movie'

const TIMER = 0.5 // 초 단위

const parsedDataInDatabase = (parsedData) => {
	const isWork = parsedData.map(async (movieData: movieType) => {
		const {
			title,
			alternativeTitle,
			language,
			regDate,
			referenceIdentifier,
			rights,
			extent,
			subjectCategory,
			person
		} = movieData

		const createMovies = await prisma.createMovieList({
			title: title.toString(),
			alternativeTitle,
			extent: extent.split(':')[1].replace(' ', ''),
			language,
			regDate,
			person: person.split(':')[1].replace(' ', ''),
			referenceIdentifier,
			rights,
			subjectCategory: subjectCategory.split(':')[1].replace(' ', '')
		})

		return createMovies
	})

	return Promise.all(isWork).then(() => Promise.resolve(true)).catch((err) => Promise.reject(err))
}

const getMovieList = async (rowCount = 10, page = 1) => {
	const response = await axios.get(`${API}?numOfRows=${rowCount}&pageNo=${page}`)
	const pageIndex = page

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
