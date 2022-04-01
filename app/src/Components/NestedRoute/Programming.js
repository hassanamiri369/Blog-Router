import React from 'react'


import Node from "./Node/Node"
import Python from "./Python/Python"
import Reacts from "./React/Reacts"


import { Link , Route , Switch , BrowserRouter as Router } from 'react-router-dom'
import { useRouteMatch , useLocation } from 'react-router-dom'




const Programming = () => {

    const {url , path} = useRouteMatch()

    const location = useLocation()
  return (
    <>
        <h1>Programming</h1>
        <h2>Nested Route</h2>
        <p>{location.pathname}</p>

        <ul>
            <li><Link to={`${url}/react`}>React</Link></li>
            <li><Link to={`${url}/node`}>Node js</Link></li>
            <li><Link to={`${url}/python`}>Python</Link></li>
            <hr/>
        </ul>

        <div>
            <Switch>

                <Route path={`${path}/react`} component={Reacts}/>
                <Route path={`${path}/node`}  component={Node}/>
                <Route path={`${path}/python`} component={Python}/>

            </Switch>
        </div>
    </>
  )
}

export default Programming