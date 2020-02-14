import React from 'react'; 
import { Link } from 'react-router-dom';

class StoryShow extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.story.title}</h2>
                <h4>{this.props.story.author_id}</h4>
                <p>{this.props.story.body}</p>
                <Link to="/">Back to Feed</Link>
            </div>
        )
    }
}; 

export default StoryShow;