import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

    constructor(props) {
        super(props); 
        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchAllStories();
        window.scrollTo(0, 0);
    }

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
        
        const user = this.props.user;
        const stories = this.props.stories;

        let authoredStories = [];

        user.storyids.forEach( (storyid) => {
            stories.forEach((story) => {
                if (storyid === story.id) {
                    authoredStories.push(story)
                };
            })
        })

        const profileStories = authoredStories.map((story, i) => {
            let editButtons;
            if (user.id === this.props.currentUser.id) {
                editButtons = <div
                    className="profile-story-buttons">
                    <button className="update-story-button"><Link to={`/stories/${story.id}/edit`}>Update Story</Link></button>
                    <button className="delete-story-button" onClick={() => this.props.removeStory(story.id)}>Delete Story</button>
                </div>
            } else {
                editButtons = ""
            };
            
            return (
                <div className="user-profile-story" key={`${i}`}>
                    <Link className="profile-story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                    <p className="profile-story-date profile-user-details">{this.getDate(story)}</p>
                    <div className="profile-story-cover-container">
                        <img className="profile-story-cover-photo" src={story.photo_url}></img>
                    </div>
                    <p className="profile-story-body">{story.body.slice(0, 400)} ...</p>
                    <div>{editButtons}</div>
                </div>
            )
        })

        return (
            <div className="user-profile">
                <h2 className="profile-username">{this.props.user.username}</h2>
                <div className="profile-user-details">Member at Large since 2017.</div>
                <div className="profile-user-details">Published {authoredStories.length} stories.</div>
                <ul className="user-stories-list">{profileStories}</ul>
            </div>
        )
    }
}

export default UserProfile; 