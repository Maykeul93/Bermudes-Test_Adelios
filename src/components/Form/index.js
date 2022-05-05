import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Form = props => {
  return (
    <form className='form'>
        <input className='inputtext' type='text' />
        <input className='submitbutton' type="submit" />
    </form>
  )
}

Form.propTypes = {}

export default Form