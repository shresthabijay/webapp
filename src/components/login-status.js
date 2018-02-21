import React from "react"
import logIn from "../actions/logIn"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"

class LoginStatus extends React.Component{
    constructor(props){
        super(props)
        this.login_component=(
            <NavLink to="/login">
            <div className="btn btn-primary btn-lg" onClick={()=> this.on_click()}> 
            Log In
            </div>
            </NavLink>
        )
        this.loggedin_component=(
            <div className="">
                Logged In
            </div>
        )
        this.a="1212";
    }

    on_click(){
        console.log("clicked")
    }

    render(){
        let displayComponent=this.props.loginStatusData.status? this.loggedin_component:this.login_component
        return(
            <div className="login-status">
                {displayComponent}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        loginStatusData:state.LoginStatusReducer,
        userData: state.UserReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        logIn:(data)=>{
            dispatch(logIn(data))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(LoginStatus)