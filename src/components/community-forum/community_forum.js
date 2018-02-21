import React from "react"
import ContentBox from "./content-section/content-box"
import DiscussionSection from "./discussison-section/discussion-section"


class CommunityForum extends React.Component{
    render(){
        return(

            <div className="community-forum">
                <h1 className="cf-header header ">{this.props.match.params.forumId}</h1>
                <div className="cf-sec1 d-flex flex-row ">
                <ContentBox forumId={this.props.match.params.forumId}/>
                <DiscussionSection/>
                </div>
            </div>
        )
    }
}

export default CommunityForum