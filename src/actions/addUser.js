
export const addUser=(user_data)=>{
    console.log("triggered")
    console.log(user_data)
    return({
        type:"ADD_USER",
        payload:user_data
    })
}
export default addUser
