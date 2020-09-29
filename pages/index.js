import React, { useState, useEffect } from 'react'
import SideMenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movielist'
import { getMovies, getCategories } from '../actions'


const Home = ({ movies, images, categories }) => {
  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resMovies = await getMovies()
  //     setMovies(resMovies)
  //   }

  //   fetchData()
  // }, [])

  return (
    <div>
      <div className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={categories} />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <div className="row">
                <MovieList movies={movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  const categories = await getCategories()
  const images = movies.map(movie => ({ id: `image-${movie.id}`, url: movie.cover, name: movie.name }))
  return {
    movies,
    images,
    categories
  }
}

export default Home