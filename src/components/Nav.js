import React from "react"
import {NavLink} from "react-router-dom"

const Nav=function(){
    return(
        <ul className="nav-bar">
            <li>
                <NavLink exact activeClassName="active" to="/" className="list">
                    Home
                </NavLink>
            </li>
        
            <li>
                <NavLink activeClassName="active" to="/membership" className="list">
                    Membership
                </NavLink>
                
            </li>

            <li>
                <NavLink activeClassName="active" to="/community" className="list">
                    Community
                </NavLink>
                
            </li>


        </ul>
    )
} 

export default Nav