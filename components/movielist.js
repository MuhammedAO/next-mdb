import React, { Component } from 'react'
import Link from 'next/link'

export default class MovieList extends Component {

  shorten = text => text && text.length > 100 ? text.substr(0, 100) + '...' : text

  render() {
    const { movies } = this.props
    return (
      <React.Fragment>
        {movies.map(movie => (
          <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
            <div className="card h-100">
            <Link href={`/movies/${movie.id}`}>
            <a ><img className="card-img-top" src={movie.image} alt={movie.title} /></a>
            </Link>
              <div className="card-body">
                <h4 className="card-title">
                <Link href={`/movies/${movie.id}`}>
                    <a>{movie.name}</a>
                  </Link>
                </h4>
                <h5>{movie.genre}</h5>
                <p className="card-text">{this.shorten(movie.description)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{movie.rating}</small>
              </div>
            </div>
          </div>
        )
        )
        }
      </React.Fragment>
    )
  }
}
