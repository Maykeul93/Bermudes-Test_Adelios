import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { setPosts } from 'src/actions/data'

import './styles.scss'

import Pagination from '../Pagination'
import Produit from '../Produit';

const Result = ({ data }) => {

  const dispatch = useDispatch()
  // posts data from redux store
  const posts = useSelector((state) => state.data.posts)
  // Filter per category
  const page = useParams()
  const dataPerCat = data.filter(aliment => aliment.categorie.slug === page.category)
  
  // Array favorites
  const [favorites, setFavorites] = useState([])
  //Function add a favorites to the array
  const handleFavorites = (produit) => {
    //function to search if the product is in the array favorites
    const isFavorites = favorites.find(favorite => favorite.code === produit.code)
    // if favorite, remove it, if not , add it
    !isFavorites ? setFavorites([...favorites, produit]) : setFavorites(favorites.filter(favorite => favorite !== produit))
  }
  console.log("favorites",favorites)
  // set current page and post per page
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)

  // get current Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = dataPerCat.slice(indexOfFirstPost, indexOfLastPost)
  console.log("currentposts", currentPosts)
  
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  // Reset current page if url change
  useEffect(() => {
    setCurrentPage(1);
  },[page]);

  useEffect(() => {
    dispatch(setPosts(currentPosts))
  },[])

  console.log("postsss",posts)
  return (
    <div className='result'>
      <Pagination postsPerPage={postPerPage} totalPosts={dataPerCat.length} paginate={paginate} currentPage={currentPage}/>

      {posts.map(aliment => (
        <Produit produit={aliment} key={aliment.nom} handleFavorites={handleFavorites} favorites={favorites}/>
      ))}
    </div>

  )
}

Result.propTypes = {
  data: PropTypes.array.isRequired
}

export default Result