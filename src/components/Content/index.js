import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Routes,
  Route,
} from "react-router-dom";

import './styles.scss'
import Navbar from '../Navbar'
import Result from 'src/containers/Result'

const Content = () => {
  const [category, setCategory] = useState()
  return (
    <div className='content'>
        <Navbar setCategory={setCategory}/>
        <Routes>
          <Route path='/:category'
            element={<Result category={category} />}
          />
        </Routes>
    </div>
  )
}

Content.propTypes = {
  data: PropTypes.array.isRequired
}

export default Content