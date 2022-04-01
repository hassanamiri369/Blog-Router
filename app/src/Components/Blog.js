import React from 'react'
import { Link } from 'react-router-dom'
import queryString from "query-string"
import {useLocation } from "react-router-dom"

const Blog = () => {
  const {search} =useLocation()

  // query string 
  const {q} = queryString.parse(search)

  return (
   <>
    <div>Blog</div>
    <hr/>
    <ul>
        <li><Link to="/blog?q=react">React</Link></li>
        <li><Link to="/blog?q=node">node</Link></li>
        <li><Link to="/blog?q=python">python</Link></li>
        <li><Link to="/blog?q=php">php</Link></li>
    </ul>
    <hr/>
    <p>query string : {q}</p>

   </>
  )
}

export default Blog