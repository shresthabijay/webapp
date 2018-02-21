import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Community from "./community.js"
import Membership from "./membership.js"
import CommunityForum from "./community-forum/community_forum"
import Home from "./home.js"
import LoginStatus from "./login-status"
import Nav from "./Nav.js"
import LoginPage from "./login-page"

class App extends React.Component{
    render(){
        return(
            
                <div className="app">

                    <div className="app-headSec d-flex justify-content-between felx-row">
                        <Nav/>
                        <LoginStatus/>
                    </div>

                    <Switch>
                    <Route exact  path="/" component={Home}/>
                    <Route exact path="/community" component={Community}/>
                    <Route path="/membership" component={Membership}/>
                    <Route path="/community/:forumId" component={CommunityForum}/>>
                    <Route path="/login" component={LoginPage}/>
                    <Route render={()=>{
                        return(
                            <div className="header">No page found!</div>
                        )
                    }}/>
                    </Switch>

                </div>
            
        )
    }
}

export default App