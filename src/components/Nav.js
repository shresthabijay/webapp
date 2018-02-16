import React from "react"
import {NavLink} from "react-router-dom"

const Nav=function(){
    return(
        <ul className="nav-bar">
            <li>
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
            </li>
        
            <li>
                <NavLink activeClassName="active" to="/membership">
                    Membership
                </NavLink>
                
            </li>

            <li>
                <NavLink activeClassName="active" to="/community">
                    Community
                </NavLink>
                
            </li>


        </ul>
    )
} 

export default Nav