import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './styles.scss';

import logo from '../../assets/misc/logo-bermudes.png'
import images from '../../assets/categories/corbeilles-fruits-legumes__2019-09-05.svg'
const Header = props => {
  return (
    <div className='header'>
        <Link to="/" >
          <img src={logo} alt='logo' />
        </Link>
        <form>
            <input type={'text'} />
        </form>
            <img className='header__item' src={images} alt="images" />
            <img className='header__item' src={images} alt="images" />
        <p>Bonjour Adelios</p>
    </div>
  )
}

Header.propTypes = {}

export default Header