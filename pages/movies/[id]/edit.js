import React from 'react'
import ModalForm from '../../../components/ModalForm'
import { getMoviesById } from '../../../actions'


class EditMovie extends React.Component {

  static async getInitialProps({ query }) {
    const movie = await getMoviesById(query.id)
    return { movie }

  }



  render() {
    const { movie } = this.props
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <ModalForm initialData={movie} />
      </div>
    )
  }

}


export default EditMovie