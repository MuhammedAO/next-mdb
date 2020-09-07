import React from 'react'
import { useRouter } from 'next/router'
import { getMoviesById } from '../../actions'

const Movie = ({ movie }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <p style={{fontSize: '20px'}}>{movie.longDesc}</p>
    </div>
  )
}

export default Movie

Movie.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  const movie = await getMoviesById(id)
  return { movie }
}
