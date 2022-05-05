import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    //set number of pages
    console.log("pagination",postsPerPage,totalPosts,paginate,currentPage)
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
  return (
    <ul className='pagination'>
        {pageNumbers.map(number =>(
            <li key = { number } className="pagination__item">
                <span
                onClick={() => paginate(number)}
                className={`pagination__link ${currentPage === number ? "pagination__active" : ""}`}
                >
                    {number}
                </span>

            </li>
        ))}
            <button
                type='text'
                className='favoritesbutton'
                onClick={() => console.log("click")}
                >Favoris
            </button>
    </ul>
  )
}

Pagination.propTypes = {
    postsPerPage: PropTypes.number,
    totalPosts: PropTypes.number,
    paginate: PropTypes.func,
    currentPage: PropTypes.number
};

Pagination.defaultProps = {
    postsPerPage: null,
    totalPosts: null,
    paginate: () => {},
    currentPage: null
}

export default Pagination