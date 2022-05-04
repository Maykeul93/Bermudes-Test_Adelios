import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import heart from "../../assets/svg/heart.svg"
import productImage from '../../assets/produits/4AIEPL@100.webp'

const Produit = ({produit, setFavorites}) => {

  const [liked, setLiked] = useState(false)
  const likedProduct = () => {
    setLiked(!liked)
    console.log(liked)
  }
  return (
    <div className='product'>
        <img 
        className={`product__heartbutton ${liked ? "product__liked" : ""}`} 
        src={heart} 
        alt="heart" 
        onClick={() => likedProduct()}
        />
        <img className='product__img' src={productImage} alt={produit.nom}/>
        <h2 className='product__name'>{produit.nom}</h2>
    </div>
  )
}

Produit.propTypes = {}

export default Produit