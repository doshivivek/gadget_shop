import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

const Router = ()=> (
    <BrowserRouter>
        <Switch>
            <Route exact path="/gadget_shop" component={Home}></Route>
            <Route path="/gadget_shop/detail/:id" component={Detail}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router;
