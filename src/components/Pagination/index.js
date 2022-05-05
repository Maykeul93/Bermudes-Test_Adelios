import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss';

const Pagination = ({postsPerPage, totalPosts}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <ul className='pagination'>
        {pageNumbers.map(number =>(
            <li key = { number } className="pagination__item">
                <a href="!#" className='pagination__link'>
                    {number}
                </a>
            </li>
        ))}
    </ul>
  )
}

Pagination.propTypes = {}

export default Pagination