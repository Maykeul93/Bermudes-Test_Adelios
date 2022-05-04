import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import Navbar from '../Navbar'
import Result from '../Result'

const Content = props => {
  return (
    <div className='content'>
        <Navbar />
        <Result />
    </div>
  )
}

Content.propTypes = {}

export default Content