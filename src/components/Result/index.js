import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import './styles.scss'

import Pagination from '../Pagination'

import Produit from '../Produit';

const Result = ({ data }) => {
  // Filter per category
  const page = useParams()
  const aliments = data.filter(aliment => aliment.categorie.slug === page.category)
  // Array favorites
  const [favorites, setFavorites] = useState([])
  console.log("favorites", favorites)
  //Function add a favorites to the array
  const handleFavorites = (produit) => {
    //function to search if the product is in the array favorites
    const isFavorites = favorites.find(favorite => favorite === produit.code)
    // if favorite, remove it, if not , add it
    !isFavorites ? setFavorites([...favorites, produit.code]) : setFavorites(favorites.filter(favorite => favorite !== produit.code))
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  // get current Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = aliments.slice(indexOfFirstPost, indexOfLastPost)
  
  return (
    <div className='result'>
      <Pagination postsPerPage={postPerPage} totalPosts={aliments.length}/>
      {currentPosts.map(aliment => (
        <Produit produit={aliment} key={aliment.nom} handleFavorites={handleFavorites} favorites={favorites}/>
      ))}
    </div>

  )
}

Result.propTypes = {}

export default Result