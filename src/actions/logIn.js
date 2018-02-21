export const logIn=(data)=>{
    console.log("triggered")
    console.log(data)
    return({
        type:"LOG_IN",
        payload:data
    })
}
export default logIn
