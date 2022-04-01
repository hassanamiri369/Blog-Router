import React from 'react';
import "./Home.css"


import {Link} from "react-router-dom"

const Home = ({state , props}) => {

    console.log(props)
    // console.log(props.location)  {pathname: '/', search: '', hash: '', state: undefined, key: 'zqngui'}
    // console.log(state)
  return <div>
      <h2>Home</h2>
      <hr/>
      <div className='container'>
          {state.map((item) => {
              return (
                <div className='nametag' key={item.id}>
                    <p>{item.id}</p>
                    <p>Name : {item.name}</p>
                    {/* <p>UserName : {item.body}</p> */}
                    <Link to={`/detail/${item.id}`}>more</Link>
                </div>
              )
          })}
      </div>
  </div>;
};

export default Home;
