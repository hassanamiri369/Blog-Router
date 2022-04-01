import React from 'react'
import { useLocation } from 'react-router-dom'


const ReduxToolkit = () => {

  const location  = useLocation()
  return (
    <>
      <div>

        <div>ReduxToolkit</div>
        <div style={{color : "red" }}>{location.pathname}</div>

      </div>
    </>
  )
}

export default ReduxToolkit