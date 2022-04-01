import React from 'react';
import { useParams , useHistory } from 'react-router-dom';

import "./Detail.css"

const Detail = (props) => {

    const {id} = useParams()
    // console.log(props)

    
    const history = useHistory()
    // 1 way
    const handleClick = () =>history.push("/about")


    const [oneUser , setOneUser] = React.useState({})

    const {name , body , email , postId  } = oneUser

    React.useEffect(()=>{
      const fetchOneUserData = async ()=>{
        await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(response => response.json())
        .then(data => setOneUser(data))
      }

      fetchOneUserData()
    } , [id])


    console.log(oneUser)


  return <>

      <h2>detail</h2>
      {/* 2 way using useHistory() */}
      <button onClick={()=> history.push("/")}>Go Home</button>
      <button onClick={handleClick}>Go About</button>


{/* ternery conditinal */}
      <div>
        {Object.keys(oneUser).length !== 0 && <div>
          <h3><span>Id : </span>{id}</h3>
          <h3><span>PostId : </span>{postId}</h3>
          <h3><span>Name : </span> {name}</h3>
          <h3><span>Body : </span>{body}</h3>
          <h3><span>Email : </span>{email}</h3>
          
          </div>}
      </div>
  </>;
};

export default Detail;
