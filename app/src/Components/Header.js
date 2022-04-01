import React from 'react';
import { Link , NavLink } from 'react-router-dom';

// import useAuth from './ProtectedRoute/useAuth';
import "./Header.css"

const Header = () => {
  // const [login , logout , isAuth] = useAuth(false)

 
  
  return <div className='header'>
      <ul>
          <li><NavLink  activeClassName="activeClass"  to="/">Home</NavLink></li>
          <li><NavLink activeClassName="activeClass" to="/topics">Topics</NavLink></li>
          <li><NavLink activeClassName="activeClass" to="/programme">Programming</NavLink></li>
          <li><NavLink activeClassName="activeClass"  to="/about">About</NavLink></li>
          <li><NavLink activeClassName="activeClass"  to="/connect">Connect</NavLink></li>
          <li><NavLink activeClassName="activeClass"  to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink activeClassName="activeClass"  to="/blog">Blog</NavLink></li>
          {/* <li><Link className='links' to="/detail">Detail</Link></li> */}
      </ul>
      {/* {isAuth ? (<button onClick={logout}>logout</button>):  (<button onClick={login}>login</button>) } */}
      {/* <div>{user ? (<button onClick={()=> setUser(user)}>Login</button>)  : (<button onClick={()=> setUser(!user)}>LogOut</button>)}</div> */}
  </div>;
};

export default Header;
