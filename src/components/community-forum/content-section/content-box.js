import React from "react"

class ContentBox extends React.Component{
    render(){
        return(
            <div className="sec1-item align-self-start">
                <div className="d-flex flex-column justify-content-start cf-sec1-contentSec">
                    <div className="p-2 item">Meet The Experts</div>
                    <div className="p-2 item">Tutorials</div>
                    <div className="p-2 item">About {this.props.forumId}</div>
                    
                </div>
            </div>
        )
    }
}

export default ContentBox