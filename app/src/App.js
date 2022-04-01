import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from './Components/Header';
// import Home from './Components/Home';
// import About from './Components/About';
import Detail from './Components/Detail';
import Dashboard from "./Components/Dashboard"
import Connect from "./Components/Connect"
import Blog from './Components/Blog';
import ConnectPost from './Components/ConnectPost';
import Topics from './NestesComponent/Topics';
import Programming from './Components/NestedRoute/Programming';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import useAuth from './Components/ProtectedRoute/useAuth';

const Home = React.lazy(() => import("./Components/Home"))
const About = React.lazy(() => import("./Components/About"))


// const Detail = React.lazy(()=>("./Components/Detail.js"))
// const Header = React.lazy(()=> import("./Components/Header"))

const App = () => {

  // protected route
  const [login , logout , isAuth] = useAuth(false)

  const [state, setState] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => setState(data))

    }

    fetchData()
  }, [])


  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <div className='containers'>
            <div className='sotialLink'>
              
                <span><svg className='svg' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 96.124 96.123"><path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 00-1.96 1.961v15.803a1.96 1.96 0 001.96 1.96H36.57v39.876a1.96 1.96 0 001.96 1.96h16.352a1.96 1.96 0 001.96-1.96V54.287h14.654a1.96 1.96 0 001.96-1.96l.006-15.803a1.963 1.963 0 00-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 001.959-1.96V1.98A1.96 1.96 0 0072.089.02z"></path></svg></span>
                <span><svg  className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" height="30px" width="30px"><path d="M302.973 57.388a117.512 117.512 0 01-14.993 5.463 66.276 66.276 0 0013.494-23.73 5 5 0 00-7.313-5.824 117.994 117.994 0 01-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 00-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 01-8.907-3.977 5 5 0 00-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 01-5.063-.735 4.998 4.998 0 00-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 01-14.095-.826 5 5 0 00-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 00-6.182-7.351z"></path></svg></span>
                <span><svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" height="30px" width="30px"><path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"></path></svg></span>
              
            </div>
            <div className='content'>
              <React.Suspense fallback={<p>Loading ...</p>}>
              {isAuth ? (<button onClick={logout}>logout</button>):  (<button onClick={login}>login</button>) }<span>Dashboard route is protected</span>
                <Switch>
                  <Route exact path='/' render={( props ) => <Home state={state} props={props}/>} />
                  <Route path="/programme" component={Programming}/>
                  <Route path="/blog" children={({match}) => match && <Blog/>}/>
                  <Route path="/about" component={About} />
                  <Route path="/connect" component={Connect}/>
                  <Route path="/connect/:link" component={ConnectPost}/>
                  {/* <Route path="/dashboard" component={Dashboard}/> */}
                  <Route path="/topics"  component={Topics}/>
                  <Route path="/detail/:id" render={({ props }) => <Detail props={props} />} />
                  <ProtectedRoute path="/dashboard" component={Dashboard} auth={isAuth}/>
                  <Route render = {()=> <h1>Page Not Found ... </h1>}/>
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </Router>


      </div>




    </>
  )
};





export default App;
