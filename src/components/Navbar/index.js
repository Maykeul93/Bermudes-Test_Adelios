import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>Item</li>
        <li className='navbar__item'>Item</li>
        <li className='navbar__item'>Item</li>
        <li className='navbar__item'>Item</li>
        <li className='navbar__item'>Item</li>
        <li className='navbar__item'>Item</li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar