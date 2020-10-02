import React from 'react'
import { useRouter } from 'next/router'
import { getMoviesById, deleteMovie } from '../../../actions'

const Movie = ({ movie }) => {
  const router = useRouter()
  const { id } = router.query
  
  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => router.push('/'))
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
        <button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg" href="#" role="button">Delete</button>
        <button onClick={() => router.push(`/movies/${id}/edit`)} className="btn btn-warning btn-lg ml-1" href="#" role="button">Edit</button>
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
