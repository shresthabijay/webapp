import React from "react"
import {connect} from "react-redux"
import addUser from "../actions/addUser"

class SignUp extends React.Component{

    constructor(props){
        super(props)
        this.messages=["","Account Created Sucessfully!","Please enter the missing fields!"]
        this.state={message:""}
    }

    get_user_info(){
        let user_name=document.getElementById("user_name").value
        let user_password=document.getElementById("user_password").value
        let user_email=document.getElementById("user_email").value
        let data={username:user_name,password:user_password,email:user_email}
        return data
    }

    get_user_details(){
        let details=this.props.userData.map((data)=>{
            return(<div>
                <p>{data.username} {data.password}</p>  
            </div>)
        })
        
        return details
    }

    submit_data(){
        let data=this.get_user_info();
        for(var key in data){
            if(data[key]==""){
                this.setState({message:this.messages[2]})
                return
            }
        }
        this.props.addUser(data)
        this.setState({message:this.messages[1]})
    }
    render(){
        return(
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
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="user_email" 
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
                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>{
                        this.submit_data()
                    }
                    }
                    >
                        Create Account
                    </button>
                    <br/>
                    <br/>
                    <div>
                        {this.state.message}
                    </div>
                </div>
         
            
            </form>
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userData: state.UserReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addUser:(data)=>{
            dispatch(addUser(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)