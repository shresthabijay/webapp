import React from "react"

let initialState=[{username:"bijay",password:"shrestha"}]

const UserReducer=(state=initialState,action)=>{
    console.log("asdasd")
    switch(action.type){
        case "ADD_USER":
            state=[...state,{username:action.payload.username,password:action.payload.password}]
            break
    }
    return state
}



export default UserReducer