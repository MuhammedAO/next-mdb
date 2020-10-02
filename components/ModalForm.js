import React, { useState } from 'react'


const ModalForm = ({ handleFormSubmit, initialData }) => {

  const defaultData = {
    name: '',
    description: '',
    rating: '',
    longDesc: '',
    image: '',
    cover: ''
  }

  const formData = initialData ? { ...initialData } : defaultData

  const [form, setForm] = useState(formData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleGenreChange = (e) => {
    const { options } = e.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    setForm({
      ...form,
      genre: value.toString()
    })
  }

  const submitForm = () => {
    handleFormSubmit({ ...form })
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..." />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          type="number"
          value={form.rating}
          onChange={handleChange}
          name="rating"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3" />
        <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          value={form.image}
          onChange={handleChange}
          name="image"
          className="form-control"
          id="image"
          placeholder="http://....." />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          value={form.cover}
          onChange={handleChange}
          name="cover"
          className="form-control"
          id="cover"
          placeholder="http://......" />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          value={form.longDesc}
          onChange={handleChange}
          name="longDesc"
          className="form-control"
          id="longDesc"
          rows="3">
        </textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>
    </form>
  )
}

export default ModalForm
