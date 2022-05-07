import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Routes,
  Route,
} from "react-router-dom";

import './styles.scss'

import Navbar from '../Navbar'
import Result from 'src/containers/Result'
import NoMatch from 'src/components/NoMatch';
import Home from 'src/components/Home';

const Content = (data) => {
  const [category, setCategory] = useState()
  return (
    <div className='content'>
        <Navbar setCategory={setCategory}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:category'
          element={<Result category={category} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  )
}

Content.propTypes = {
  data: PropTypes.array.isRequired
}

export default Content