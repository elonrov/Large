import React from 'react'; 
import { Link } from 'react-router-dom';

class StoryShow extends React.Component {

    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId)
    };

    render () {
        let title; 
        let body; 
        let author;
        if (this.props.story) {
            title = this.props.story.title;
            author = this.props.author.username;
            body = this.props.story.body; 
        } else {
            title = ""; 
            body = ""; 
            author = "";
        }
      
        return (
            
            <div>
                <div className="story-show">
                    <h2 className="title">{title}</h2>
                    <h4 className="subtitle">Of considerable or relatively great size, extent, or capacity.</h4>
                    <div className="author">
                        <h4 className="author-name">{author}</h4>
                        <img></img>
                        <div className="date">Feb 14 · 5 min read ★</div>
                    </div>
                    <div className="story-cover-photo">
                        <img></img>
                    </div>
                    <p>{body}</p>
                    {/* <Link to="/">Back to Feed</Link> */}
                </div>
                <div className="responses">Responses Go Here</div>
            </div>
        )
    }
}; 

export default StoryShow;