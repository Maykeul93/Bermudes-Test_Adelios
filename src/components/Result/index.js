import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import './styles.scss'

import Produit from '../Produit';

const Result = ({ data }) => {
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
  return (
    <div className='result'>
      {aliments.map(aliment => (
        <Produit produit={aliment} key={aliment.nom} handleFavorites={handleFavorites} favorites={favorites}/>
      ))}
    </div>

  )
}

Result.propTypes = {}

export default Result