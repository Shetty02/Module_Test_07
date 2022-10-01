import React from 'react'
import { ReactComponent as Login } from './icons/login.svg';
import { ReactComponent as Cart } from './icons/cart.svg';
import { ReactComponent as Search } from './icons/search.svg';
import { ReactComponent as Like } from './icons/like.svg';
import './Header.css'
import MyContext from '../../Context'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
function Header() {

  const {count} = React.useContext(MyContext);

  return (
    <div>
        {/* Navigation Bar */}
      <div className='navigation-bar'>
        <Router>
          <div className='navigation-container'>
            <div className='navigation-brand'>
            <Link to="/"> <h3>AccioJob</h3></Link>
            </div>
            <div className='navigation-list'>
            <Link to="/Home">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Pages">Pages</Link>
            </div>
            <div className="login-logut">
               <div><Login width ={"20px"}/><Link to="/Login">Login / Register</Link>
               </div>
            <div className="icons-list">
              <div className='cart'>
            <Cart width ={"20px"}/> <span>{count}</span>
              </div>
            <Search width ={"20px"}/>
            <Like width ={"20px"}/>
            </div>
            </div>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default Header