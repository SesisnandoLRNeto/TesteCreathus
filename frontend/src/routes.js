import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Details from './pages/details'

import Main from './pages/main'
import Register from './pages/register'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/projects/:id' component={Details}/>
            <Route path='/register' component={Register}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
)

export default Routes