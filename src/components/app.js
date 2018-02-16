import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Community from "./community.js"
import Membership from "./membership.js"
import Home from "./home.js"
import Nav from "./Nav.js"

class App extends React.Component{
    render(){
        return(
            
                <div className="app">
                    <Nav/>
                    <Switch>
                    <Route exact  path="/" component={Home}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/membership" component={Membership}/>
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