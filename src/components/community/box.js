import React from "react"

class Box extends React.Component{

    redirect_to_forum(){
        this.props.history.push('/community/'+this.props.children)
    }
    render(){
        return(
            <div className="mainbox" 
                onClick={()=>{this.redirect_to_forum()}}
            >
                <h1>{this.props.children}</h1>
                <div className="box1" style={{backgroundImage:'url('+this.props.img+')',backgroundSize:"100% 100%"}}> </div>
            </div>
        ) 
    }
} 
export default Box