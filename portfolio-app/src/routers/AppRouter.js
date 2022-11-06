import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import HomePage from '../components/HomePage'
import Portfolio from '../components/Portfolio'
import Contact from './../components/contact'
import NotFoundPage from '../components/NotFound';
import Header from './../components/Header';
import PortfolioItem from '../components/PortfolioItem';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path= "/portfolio/:id" component ={PortfolioItem} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter;