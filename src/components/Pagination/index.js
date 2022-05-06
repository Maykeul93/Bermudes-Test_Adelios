import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from 'src/actions/data';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {

    const dispatch = useDispatch()
    const favoritesPosts = useSelector((state) => state.data.favorites)
    
    
    console.log("favoritesposts",favoritesPosts)
    //set number of pages
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
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
                onClick={() => dispatch(setPosts(favoritesPosts))}
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