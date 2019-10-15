/* eslint-disable max-len */
import axios from 'axios'
import API from '../API'
import { prisma } from '../../prisma/generated/prisma-client'

const MAX_PAGE = 720
const LATEST_PAGE = 389
const TIMER = 1 // 초 단위

const joinTheDirectors = (directors) => {
	const module = directors.map((director) => director.peopleNm).join(',')
	return module
}

const parsedDataInDatabase = (parsedData) => {
	const isWork = parsedData.map(async (movieData) => {
		const {
			movieNm,
			movieNmEn,
			prdtYear,
			openDt,
			prdtStatNm,
			nationAlt,
			genreAlt,
			repNationNm,
			directors
		} = movieData

		const createMovies = await prisma.createMovieList({
			movieNm,
			movieNmEn,
			prdtYear,
			openDt,
			prdtStatNm,
			nationAlt,
			genreAlt,
			repNationNm,
			directors: joinTheDirectors(directors)
		})
		return createMovies
	})

	return Promise.all(isWork).then(() => Promise.resolve(true))
}

const getMovieList = async (rowCount = 10, page = 15) => {
	const response = await axios.get(`${API}&itemPerPage=${rowCount}&curPage=${page}`)
	const pageIndex = page

	try {
		const { movieList } = response.data.movieListResult

		if (pageIndex > MAX_PAGE) {
			throw console.log('해당 API에 영화 정보가 더이상 없습니다.')
		}

		const saveInDatabase = await parsedDataInDatabase(movieList)

		if (saveInDatabase) {
			setTimeout(() => {
				getMovieList(rowCount, page + 1)
				console.log(`크롤링 상황 ${page}/${MAX_PAGE}`)
			}, TIMER * 1000)
		}
	} catch (err) {
		console.error('MovieList Parse Error', err.message)
	}
}

export default getMovieList
