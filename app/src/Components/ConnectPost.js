import React from 'react'
import { useParams } from 'react-router-dom'

const ConnectPost = () => {
    const {link} = useParams()
    console.log(link)
  return (
    <>
    <h3>Connect Post</h3>
    <p>post : {link}</p>
    </>
  )
}

export default ConnectPost