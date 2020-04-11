import React from 'react'; 
import { Link } from 'react-router-dom';
import ResponseIndexContainer from '../response/response_index_container.js';
import ResponseFormContainer from '../response/response_form_container.js';

class StoryShow extends React.Component {

    constructor(props) {
        super(props); 
        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
        window.scrollTo(0, 0)
    };

    getDate(story) {
        if (!story.date) return "";
        const month = story.date.split('').slice(5, 7).join('');
        let published_month;
        if (month === '01') {
            published_month = "Jan";
        } else if (month === '02') {
            published_month = "Feb";
        } else if (month === '03') {
            published_month = "Mar";
        } else if (month === '04') {
            published_month = "Apr";
        } else if (month === '05') {
            published_month = "May";
        } else if (month === '06') {
            published_month = "June";
        } else if (month === '07') {
            published_month = "July";
        } else if (month === '08') {
            published_month = "Aug";
        } else if (month === '9') {
            published_month = "Sept";
        } else if (month === '10') {
            published_month = "Oct";
        } else if (month === '11') {
            published_month = "Nov";
        } else if (month === '12') {
            published_month = "Dec";
        };
        const published_day = story.date.split('').slice(8, 10).join('');

        return "Published on " + published_month + " " + published_day;
    }
    
    render () {

        let title; 
        let body; 
        let authorname;
        let photoFile;
        let authId;
        let date;
        if (this.props.story) {
            title = this.props.story.title;
            authorname = this.props.author.username;
            body = this.props.story.body; 
            photoFile = this.props.story.photo_url;
            authId = this.props.author.id
            date = this.getDate(this.props.story); 
        } else {
            title = ""; 
            body = ""; 
            author = "";
            photoFile = "";
            date = "";
        }
      
        return (
            
            <div>
                <div className="story-show">
                    <h2 className="title">{title}</h2>
                    <h4 className="subtitle">Of considerable or relatively great size, extent, or capacity.</h4>
                    <div className="author">
                        <Link to={`/users/${this.props.story.author_id}`}><h4 className="show-author-name">By {authorname}</h4></Link>
                        <div className="date">{date}</div>
                    </div>
                    <div className="story-cover-container">
                        <img className="story-cover-photo" src={photoFile}></img>
                    </div>
                    <p>{body}</p>
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