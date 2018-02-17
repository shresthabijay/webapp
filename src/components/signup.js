import React from "react"

class SignUp extends React.Component{

    render(){
        return(
        <div className="container">
            <form  className="form-inline">
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control" 
                    >
                    </input>
                    <label className="control-label">Password</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control" 
                    >
                    </input>
                </div>
         
            <button className="btn btn-primary">Signin</button>
            </form>
        </div>
        )
    }
}

export default SignUp