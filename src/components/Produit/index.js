import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import heart from "../../assets/svg/heart.svg"
import productImage from '../../assets/produits/4AIEPL@100.webp'

const Produit = ({produit, handleFavorites, favorites}) => {

  const [liked, setLiked] = useState(false)
  const likedProduct = (produit) => {
    setLiked(!liked)
    handleFavorites(produit)
  }

  useEffect(() => {
    const isFavorites = favorites.find(favorite => favorite === produit.code)
    if(isFavorites){
      setLiked(!liked)
    }
  },[ favorites, liked, produit ])
  
  return (
    <div className='product'>
        <img 
        className={`product__heartbutton ${liked ? "product__liked" : ""}`} 
        src={heart} 
        alt="heart" 
        onClick={() => likedProduct(produit)}
        />
        <img className='product__img' src={productImage} alt={produit.nom}/>
        <h2 className='product__name'>{produit.nom}</h2>
    </div>
  )
}

Produit.propTypes = {
  produit: PropTypes.object.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default Produit