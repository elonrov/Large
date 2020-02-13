import React from 'react'; 
import { Link } from 'react-router-dom'; 

class StoryIndex extends React.Component {
    constructor (props) {
        super(props)
    }; 

    render () {
        return (
            <div>
                <h1>Story Index</h1>
                {/* <Link to="/api/story/new">Write</Link> */}
            </div>
        )
    };
}; 

export default StoryIndex;
