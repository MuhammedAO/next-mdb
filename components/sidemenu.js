import React from 'react'
import { createMovie } from '../actions'
import {useRouter} from 'next/router'
import Modal from './modal'
import ModalForm from './ModalForm'

const SideMenu = ({ categories }) => {

  let modal = null
  const router = useRouter()

  const handleMovieCreate = (movie) => {
    createMovie(movie).then(movies => {
      modal.closeModal()
      router.push('/')
    })
  }

  return (
    <React.Fragment>
      <Modal ref={ele => modal = ele} hasSubmit={false}>
        <ModalForm handleFormSubmit={handleMovieCreate} />
      </Modal>
      <h1 className="my-4">MDB</h1>
      <div className="list-group">
        {categories.map(c => <a key={c.id} href="#" className="list-group-item">{c.name}</a>)}
      </div>
    </React.Fragment>
  )
}

export default SideMenu
