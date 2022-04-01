import React from 'react'
import {Route,NavLink ,  useRouteMatch , useHistory, Link} from "react-router-dom"

const FirstStep = () =>{
  
  return (
    <>
      <div>
      <h2>First step</h2>
      
      <Link to="/topics/step2">Next</Link>
      </div>
    </>
  )
}

const SecondStep = ()=>{
  return (
    <>
      <div>
      <h2>Second step</h2>
      <Link to="/topics/step1">Previous</Link><br/>
      <Link to="/topics/step3">Next</Link>
      </div>
    </>
  )
}


const ThreeStep = ()=>{
  return (
    <>
      <div>
      <h2>Three step</h2>
      <Link to="/topics/step2">Previous</Link><br/>
      <Link to="/topics/step4">Next</Link>
      </div>
    </>
  )
}


const FourStep = ()=>{
  return (
    <>
      <div>
      <h2>Four step</h2>
      <Link to="/topics/step3">Previous</Link><br/>
      
      </div>
    </>
  )
}

const Topics = () => {

  const {url , path} = useRouteMatch()
  return (
    <div className='stepIndicatorParent'>
      <h1>Topics</h1>
      
      <div className='StepIndicatorLinks'>
          <div><NavLink activeClassName='activeClass' to={`${url}/step1`}>1</NavLink ></div>
          <div><NavLink activeClassName='activeClass' to={`${url}/step2`}>2</NavLink ></div>
          <div><NavLink activeClassName='activeClass' to={`${url}/step3`}>3</NavLink ></div>
          <div><NavLink activeClassName='activeClass' to={`${url}/step4`}>4</NavLink ></div>
      </div>

      <div className='StepIndicatorRoute'>
        <div className='output'>
        <Route path={`${path}/step1`} component={FirstStep}/>
        <Route path={`${path}/step2`} component={SecondStep}/>
        <Route path={`${path}/step3`} component={ThreeStep}/>
        <Route path={`${path}/step4`} component={FourStep}/>
        </div>
      </div>
    </div>
    
  )
}

export default Topics