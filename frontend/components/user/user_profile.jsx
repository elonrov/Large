import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchAllStories();
        window.scrollTo(0, 0);
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
                    <p className="profile-story-date profile-user-details">Published on Feb 14, 2020</p>
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