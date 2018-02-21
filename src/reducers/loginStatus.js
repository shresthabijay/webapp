import React from "react"

let initial_state={status:false,logged_user:null}

const LoginStatusReducer=(state=initial_state,action)=>{
    switch(action.type){
        case "LOG_IN":
            if(state.status==true){

            }
            break;
        
    }
    return state;
}

export default LoginStatusReducer;

