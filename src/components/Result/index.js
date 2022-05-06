import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import Pagination from '../Pagination'
import Produit from 'src/containers/Produit';

import './styles.scss'


const Result = ({ data, posts, setPosts }) => {

  const [dataPerCat, setDataPerCat] = useState([])
  const page = useParams()
  
  // set current page and post per page
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(20)

  // get current Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = dataPerCat.slice(indexOfFirstPost, indexOfLastPost)
  
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  // Reset current page if url change
  useEffect(() => {
    setCurrentPage(1);
    // Filter per category
    if(page.category === "favorites"){
      setDataPerCat(posts)
    }else if (page.category === "search"){
      setDataPerCat(posts)
    }else{
      setDataPerCat(data.filter(aliment => aliment.categorie.slug === page.category))
    }
  },[page]);

  // rerender posts when current posts change
  useEffect(() => {
      setPosts(currentPosts);
  },[JSON.stringify(currentPosts)]);

  return (
    <div className='result'>
      <Pagination postsPerPage={postPerPage} totalPosts={dataPerCat.length} paginate={paginate} currentPage={currentPage}/>

      {posts.map(aliment => (
        <Produit produit={aliment} key={aliment.nom} />
      ))}
    </div>

  )
}

Result.propTypes = {
  data: PropTypes.array.isRequired
}

export default Result