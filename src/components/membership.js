import React from "react"
import SignUp from "./signup"

class Membership extends React.Component{
    render(){
        return(
            <div>
                <div className="header">Join the community!</div>
                <SignUp/>
            </div>
        )
    }
}

export default Membership