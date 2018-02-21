import React from "react"

class LoginPage extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(<div className="login-page">
            <div className="header">
                Login Page
            </div>
            <div className="container">
            <form  className="form-group ">
                <div className="form-group col-sm-6 ">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="user_name" 
                    >
                    </input>
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="username"
                        className="form-control" 
                        id="user_password"
                    >
                    </input>
                    
                    <br/>
                    <button type="button" className="btn btn-primary btn-sm"
                    >
                        Log In
                    </button>
                    <br/>
                    <br/>
                </div>
         
            
            </form>
        </div>
        </div>)
    }
}

export default LoginPage