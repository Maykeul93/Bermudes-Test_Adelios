import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Routes,
  Route,
} from "react-router-dom";

import './styles.scss'
import Navbar from '../Navbar'
import Result from '../Result'

const Content = ({data}) => {
  const [category, setCategory] = useState()

  return (
    <div className='content'>
        <Navbar setCategory={setCategory}/>
        <Routes>
          <Route path='/:category'
            element={<Result category={category} data={data}/>}
          />
        </Routes>
    </div>
  )
}

Content.propTypes = {}

export default Content