import React from "react"
import Section from "./community/section"
import {Redirect} from "react-router-dom"
import {render} from "react-dom"
class Community extends React.Component{

  
    render(){
        return(
            <div>
                <div className="header">Community!</div>
                <Section {...this.props}/>
            </div>
        )
    }
}

export default Community