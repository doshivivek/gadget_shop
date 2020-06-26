import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

const Router = ()=> (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router;
