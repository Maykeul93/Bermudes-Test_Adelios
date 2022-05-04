import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

import './styles.scss';

import logoFruits from '../../assets/categories/fruits__2019-11-15.svg';
import logoLegumes from '../../assets/categories/legumes__2019-11-15.svg';
import logoSurgeles from '../../assets/categories/surgeles__2019-11-15.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className='navbar__title'>Les catégories</h2>
      <ul className='navbar__list'>
        <Link to="/fruits">
          <li className='navbar__categorie'>
            <img className='navbar__logo' src={logoFruits} alt="logo-fruits" />
            Fruits
          </li>
        </Link>
        <Link to="/legumes">
          <li className='navbar__categorie'>
            <img className='navbar__logo' src={logoLegumes} alt="logo-legumes" />
            Légumes
          </li>
        </Link>
        <Link to="/surgeles">
          <li className='navbar__categorie'>
            <img className='navbar__logo' src={logoSurgeles} alt="logo-surgeles" />
            Surgelés
          </li>
        </Link>
      </ul>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar