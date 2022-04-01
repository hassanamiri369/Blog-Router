import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from "query-string"

import { useLocation } from 'react-router-dom';
const About = (props) => {

  // get search parmaters   from loaction  useing useLaction() hooks
  const {search} = useLocation()

  // get search parameters from props   ===> props.loaction.search


  // 1 way :  using queryString   ==> npm install queryString package
  // const {name , age} = queryString.parse(search)


  //2 way  : using    URLSearchParmas(search)
  const searchParmas =new URLSearchParams(search);
  const name = searchParmas.get("name")
  const age = searchParmas.get("age")
  
  console.log(props)
  
  const history = useHistory()
  return <div>
      <h2>About</h2>
      <button onClick={()=> history.push("/")}>Go Home</button>
      <p>useHistory()</p>
      <p>useParams()</p>
      <p>craeating  <strong>Router</strong> in react</p>
      <hr/>
      <p>name : {name}</p>
      <p>age : {age}</p>

  </div>;
};

export default About;
