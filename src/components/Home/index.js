import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Home = props => {
  return (
    <div className='home'>
        <h1 className='home__title'>Bienvenue sur bermudes</h1>
        <div className='home__description'>
          <p className='home__item'>Vous êtes sur la premiere version de notre site.</p>
          <p className='home__item'>Nous vous proposons pour le moment un choix entre 3 gammes de produit: des fruits, des légumes ainsi que des produits surgelés.</p>
          <p className='home__item'>Vous avez également la possibilité d'effectuer une recherche pour trouvé exactement ce dont vous avez besoin.</p>
          <p className='home__item'>Nous effectuons des livraisons quotidiennes 6j/7 dans Paris et sa région.</p>
          <p className='home__item'>Bonne visite sur notre site.</p>
        </div>
    </div>
  )
}

Home.propTypes = {}

export default Home