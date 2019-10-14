import { get } from 'config'

const key = get('Customer.API_KEY')

const query = `?key=${key}`

const API_URL = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json${query}`

export default API_URL
