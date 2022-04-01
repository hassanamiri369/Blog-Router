import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Connect = (props) => {
  // console.log(props)    /// {history: {…}, location: {…}, match: {…}, staticContext: undefined}
  

  const {link} = useParams()
  // console.log(product)


   const myLink = [
     {
       link : "react" , title : "react is best front end library"
     } ,
     {
      link : "python" , title : "python is back end language"
    } ,
    {
      link : "router" , title : "router is best front end library for create routers"
    } ,
   ]
  return (
    <>
      <div>
      <h2>Connect</h2>
      <hr/>
        <ul>
          {myLink.map((item , index) => (
            <li key={index}>
              <Link to={`/connect/${item.link}`}>{item.link}</Link>
            </li>
          ))}

        </ul>
      </div>
     
    </>
  )
}

export default Connect