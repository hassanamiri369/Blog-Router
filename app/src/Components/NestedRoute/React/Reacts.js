import React from "react"
import { Link , Route , Switch , useRouteMatch } from "react-router-dom"

import Redux from "./Redux"
import ReduxToolkit from "./ReduxToolkit"

const Reacts = () => {

    const {url , path} = useRouteMatch()
    
    return (
        <>
        <h2>React</h2>
        <hr/>
        <div>
            <p><Link to={`${url}/redux`}>Redux</Link></p>
            <p><Link to={`${url}/reduxtoolkit`}>Redux-toolkit</Link></p>
            <hr/>
        </div>

        <Switch>
            <Route path={`${path}/redux`} component={Redux}/>
            <Route path={`${path}/reduxtoolkit`} component={ReduxToolkit} />
        </Switch>
        </>
    )
}

export default Reacts