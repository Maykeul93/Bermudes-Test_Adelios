import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import { useNavigate } from 'react-router-dom'

const Form = ({data, inputValue, setPosts, onInputChange}) => {

  const navigate = useNavigate();
  
  //Function Submit form
  const handleSubmit = (e)=> {
    e.preventDefault()
    // If input not empty do : 
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
        placeholder='Rechercher un produit'
        onChange={(e) => onInputChange(e.target.value)} />
        <input className='submitbutton' type="submit" />
    </form>
  )
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
  inputValue: PropTypes.string,
  setPosts: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

Form.defaultProps = {
  inputValue: "",
}
export default Form