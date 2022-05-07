import React from 'react'
import PropTypes from 'prop-types'
import {
  Link, NavLink
} from "react-router-dom";

import './styles.scss';

import logoFruits from '../../assets/categories/fruits__2019-11-15.svg';
import logoLegumes from '../../assets/categories/legumes__2019-11-15.svg';
import logoSurgeles from '../../assets/categories/surgeles__2019-11-15.svg';

const Navbar = ({setCategory}) => {
  return (
    <div className='navbar'>
      <h2 className='navbar__title'>Les catégories</h2>
      <ul className='navbar__list'>
        <NavLink 
        className='navbar__link' 
        to="/fruits">
          <li className='navbar__categorie'
          onClick={() => setCategory("fruits")}
          >
            <img className='navbar__logo' src={logoFruits} alt="logo-fruits" />
            Fruits
          </li>
        </NavLink>
        <NavLink className='navbar__link' to="/legumes">
          <li className='navbar__categorie'
          onClick={() => setCategory("legumes")}
          >
            <img className='navbar__logo' src={logoLegumes} alt="logo-legumes" />
            Légumes
          </li>
        </NavLink>
        <NavLink className='navbar__link' to="/surgeles">
          <li className='navbar__categorie'
          onClick={() => setCategory("surgeles")}
          >
            <img className='navbar__logo' src={logoSurgeles} alt="logo-surgeles" />
            Surgelés
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default Navbar