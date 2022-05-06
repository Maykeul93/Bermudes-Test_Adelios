import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

import logo from '../../assets/misc/logo-bermudes.png';
import {BsFillBasketFill} from 'react-icons/bs';
import {AiTwotoneNotification} from 'react-icons/ai';
import Form from 'src/containers/Form';

const Header = props => {
  return (
    <div className='header'>
        <Link to="/" className='header__logo' >
          <img  src={logo} alt='logo' />
        </Link>
        <Form />
        <AiTwotoneNotification size={42} />
        <BsFillBasketFill size={42} />
        <p className='header__text'>Bonjour Adelios</p>
    </div>
  )
}

Header.propTypes = {}

export default Header