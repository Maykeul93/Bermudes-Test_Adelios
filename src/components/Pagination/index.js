import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';
//Import action
import { setPosts } from 'src/actions/data';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, indexOfFirstPost, indexOfLastPost}) => {

    const dispatch = useDispatch()
    // favorites from redux state
    const favoritesPosts = useSelector((state) => state.data.favorites)
    
    //set number of pages
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
      <>
        <p className='pagination-index'>{indexOfFirstPost} - {indexOfLastPost} sur {totalPosts} résultats</p>
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
            <NavLink to="/favorites">
                <button
                    type='text'
                    className='favoritesbutton'
                    onClick={() => {
                        dispatch(setPosts(favoritesPosts))
                    }}
                    >Favoris
                </button>
            </NavLink>
        </ul>
    </>
  )
}

Pagination.propTypes = {
    postsPerPage: PropTypes.number,
    totalPosts: PropTypes.number,
    paginate: PropTypes.func,
    currentPage: PropTypes.number,
    indexOfFirstPost:PropTypes.number,
    indexOfLastPost:PropTypes.number
};

Pagination.defaultProps = {
    postsPerPage: null,
    totalPosts: null,
    paginate: () => {},
    currentPage: null,
    indexOfFirstPost: 0,
    indexOfLastPost: 0
}

export default Pagination