import axios from 'axios'


const baseUrl = 'http://localhost:3000'

const CATEGORY_DATA = [
  { id: 'c-1', name: 'drama' },
  { id: 'c-2', name: 'action' },
  { id: 'c-3', name: 'adventure' },
  { id: 'c-4', name: 'historical' },
]

// 1. getCategories function
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
    }, 50)
  })
}

export const getMovies = async () => {
  const res = await axios.get(`${baseUrl}/api/v1/movies`)
  return res.data
}



export const createMovie = async (movie) => {
  movie.id = Math.random().toString(36).substr(2, 5)
  const res = await axios.post(`${baseUrl}/api/v1/movies`, movie)
  return res.data
}


export const getMoviesById = async (id) => {
  const res = await axios.get(`${baseUrl}/api/v1/movies/${id}`)
  return res.data
}

export const deleteMovie = async (id) => {
  const res = await axios.delete(`${baseUrl}/api/v1/movies/${id}`)
  return res.data
}