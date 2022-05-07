import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

//Import icons
import fullLogo from 'src/assets/misc/logo-bermudes.png';
import smallLogo from 'src/assets/misc/icone-notification.png'
import {BsFillBasketFill} from 'react-icons/bs';
import {AiTwotoneNotification} from 'react-icons/ai';
//Import component
import Form from 'src/containers/Form';

const Header = props => {
  //media querie 
  const logo = window.innerWidth < 600 ? smallLogo : fullLogo
  return (
    <div className='header'>
        <Link to="/" className='header__logo' >
   
          <img  src={logo} alt='logo' />
        </Link>
        <Form />
        <Link className='header__link' to="#">
          <AiTwotoneNotification size={42} />
        </Link>
        <Link className='header__link' to="#">
          <BsFillBasketFill size={42} />
        </Link>
        <p className='header__text'>Bonjour Adelios</p>
    </div>
  )
}

Header.propTypes = {}

export default Header