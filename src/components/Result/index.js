import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import './styles.scss'

import Produit from '../Produit';

const Result = ({category, data}) => {
  const page = useParams()
  const aliments = data.filter(aliment => aliment.categorie.slug === page.category)
  
  const [favorites, setFavorites] = useState([])

  return (
    <div className='result'>
      {aliments.map(aliment => (
        <Produit produit={aliment} key={aliment.nom} setFavorites={setFavorites}/>
      ))}
    </div>

  )
}

Result.propTypes = {}

export default Result