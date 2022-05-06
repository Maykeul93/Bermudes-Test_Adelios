import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import { useNavigate } from 'react-router-dom'


const Form = ({data, inputValue, setPosts, onInputChange}) => {

  const navigate = useNavigate();
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    if(inputValue !== ""){
      const searchPosts = data.filter(element => element.nom.toLowerCase().includes(inputValue) || element.categorie.slug.toLowerCase().includes(inputValue))
      setPosts(searchPosts)
      e.target.reset();
      onInputChange("")
      navigate('/search')
      }
  }

  return (
    <form 
    className='form'
    onSubmit={handleSubmit}
    >
        <input 
        className='inputtext' 
        type='text'
        onChange={(e) => onInputChange(e.target.value)} />
        <input className='submitbutton' type="submit" />
    </form>
  )
}

Form.propTypes = {}

export default Form