import React, { useState, useEffect } from 'react'
import SideMenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movielist'
import { getMovies } from '../actions'


const Home = ({ movies, images }) => {
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
              <SideMenu />
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
  const images = movies.map(movie => ({ id: `image-${movie.id}`, url: movie.cover, name: movie.name }))
  return {
    movies,
    images
  }
}

export default Home