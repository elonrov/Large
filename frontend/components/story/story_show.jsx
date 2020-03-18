import React from 'react'; 
import { Link } from 'react-router-dom';
import ResponseIndexContainer from '../response/response_index_container.js';
import ResponseFormContainer from '../response/response_form_container.js';

class StoryShow extends React.Component {

    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
        window.scrollTo(0, 0)
    };

    render () {
        let title; 
        let body; 
        let authorname;
        let photoFile;
        let authId;
        if (this.props.story) {
            title = this.props.story.title;
            authorname = this.props.author.username;
            body = this.props.story.body; 
            photoFile = this.props.story.photo_url;
            authId = this.props.author.id
        } else {
            title = ""; 
            body = ""; 
            author = "";
            photoFile = "";
        }
      
        return (
            
            <div>
                <div className="story-show">
                    <h2 className="title">{title}</h2>
                    <h4 className="subtitle">Of considerable or relatively great size, extent, or capacity.</h4>
                    <div className="author">
                        <Link to={`/users/${this.props.story.author_id}`}><h4 className="show-author-name">By {authorname}</h4></Link>
                        <div className="date">Feb 14 · 5 min read ★</div>
                    </div>
                    <div className="story-cover-container">
                        <img className="story-cover-photo" src={photoFile}></img>
                    </div>
                    <p>{body}</p>
                    {/* <Link to="/">Back to Feed</Link> */}
                </div>
                <div className="responses-all">
                    <div className="responses-header">
                        <h5>Responses</h5>
                    </div>
                    <div className="response-form-container">
                        <ResponseFormContainer />
                    </div>
                    <div className="responses-section">
                        <ResponseIndexContainer storyId={this.props.story.id}/>
                    </div>
                </div>
            </div>
        )
    }
}; 

export default StoryShow;