import React from "react"
import Box from "./box"
import python_img from "../../contents/python.png"
import react_img from "../../contents/react.png"
import java_img from "../../contents/java.png"
import css_img from "../../contents/css.png"

class Section extends React.Component{
  
    render(){
        return(
            <div className="community-section">
                 <Box img={python_img} {...this.props}>Python</Box>
                 <Box img={java_img} {...this.props}>Java</Box>
                 <Box img={css_img} {...this.props}>CSS</Box>
                 <Box img={react_img} {...this.props}>React</Box>
                 
            </div>
        )
    }
}
export default Section 