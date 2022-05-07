import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
//Import icons
import heart from "src/assets/svg/heart.svg"
import productImage from 'src/assets/produits/4AIEPL@100.webp'

const Produit = ({produit, addFavorites, removeFavorites, favorites}) => {

  // if liked or not
  const [liked, setLiked] = useState(false)

  // function when user like or dislike 
  const handleFavorites = (produit) => {
    //function to search if the product is in the redux state
    const isFavorites = favorites.find(favorite => favorite.code === produit.code)
    // if favorite, remove it, if not , add it
    !isFavorites ? addFavorites(produit) : removeFavorites(produit)
  }
    // function like a product
  const likedProduct = (produit) => {
    setLiked(!liked)
    handleFavorites(produit)
  }
    //Set like button if liked
  useEffect(() => {
    const isFavorites = favorites.find(favorite => favorite.code === produit.code)
    if(isFavorites){
      setLiked(!liked)
    }
  },[])
  
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
  addFavorites: PropTypes.func.isRequired,
  removeFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default Produit