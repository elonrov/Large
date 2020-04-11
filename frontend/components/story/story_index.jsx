import React from 'react'; 
import { Link } from 'react-router-dom';
import StoryShow from './story_show';

class StoryIndex extends React.Component {
    constructor (props) {
        super(props); 
        this.getDate = this.getDate.bind(this);

    }; 

    componentDidMount () {
        this.props.fetchAllStories(this.props.stories);
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

        return published_month + " " + published_day;
    }

    render () {


        let editorIndexPrimary = this.props.stories.slice(0, 2).map((story, i) => {
            const preview = story.body.slice(0, 225) + "...";
            if (i)
            return (
                <React.Fragment key={story.id}>
                    <div className="editor-pick-story-primary">
                        <div className="story-minus-pic">
                            <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                            <Link to={`users/${story.author_id}`} className="story-author"><h4>By {story.author}</h4></Link>
                            <p className="story-preview">{preview}</p>
                        </div>
                        <div className="story-thumbnail-primary">
                                <img src={story.photo_url}></img>
                        </div>
                    </div>
                </React.Fragment>
            )
        });

        let editorIndexSecondary = this.props.stories.slice(2, 4).map((story, i) => {
            const preview = story.body.slice(0, 80) + "...";
            if (i)
                return (
                    <React.Fragment key={story.id}>
                        <div className="editor-pick-story-secondary">
                            <div className="story-thumbnail-secondary">
                                <img src={story.photo_url}></img>
                            </div>
                            <div className="story-minus-pic">
                                <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                                <Link to={`users/${story.author_id}`} className="story-author"><h4>By {story.author}</h4></Link>
                                <p className="story-preview">{preview}</p>
                            </div>
                        </div>
                    </React.Fragment>
                )
        });
        
        let editorIndexTertiary = this.props.stories.slice(4, 8).map((story, i) => {
            const preview = story.body.slice(0, 150) + "...";
            if (i)
                return (
                    <React.Fragment key={story.id}>
                        <div className="editor-pick-story-tertiary">
                            <div className="story-thumbnail-tertiary">
                                    <img className="tert-pic" src={story.photo_url}></img>
                            </div>
                            <div className="tert-minus-pic">
                                <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                                <Link to={`users/${story.author_id}`}><h4 className="story-author-tert">By {story.author}</h4></Link>
                                <p className="story-preview">{preview}</p>
                            </div>
                        </div>
                    </React.Fragment>
                )
        });

        let popularIndex = this.props.stories.slice(8, 12).map((story, i) => {
            return (
                <React.Fragment key={story.id}>
                    <li className="popular-story">
                        <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                            <Link to={`users/${story.author_id}`} className="story-author"><h4>By {story.author}</h4></Link>
                        <h5 className="published-date">{this.getDate(story)} {(Math.ceil(Math.random() * 10) + 2)} min read ★</h5>
                    </li>
                </React.Fragment>
            )
        });

        let feedIndex = this.props.stories.slice(12).map((story, i) => {
            const preview = story.body.slice(0, 130) + "...";
            if (i)
                return (
                    <React.Fragment key={story.id}>
                        <div className="feed">
                            <div className="feed-story">
                                <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                                <p className="story-preview">{preview}</p>
                                <Link to={`users/${story.author_id}`}><h4 className="story-author">{story.author}</h4></Link>
                                <h5 className="published-date">{this.getDate(story)} · {(Math.ceil(Math.random() * 10) + 2)} min read ★</h5>
                            </div>
                            <div className="story-thumbnail-feed">
                                <img src={story.photo_url}></img>
                            </div>
                        </div>
                    </React.Fragment>
                )
        });

        return (
            <div className="index-page">
                <ul className="categories-list">
                    <li className="category-name">AIRCRAFT</li>
                    <li className="category-name">SHORT/SICK</li>
                    <li className="category-name">R-THAN-LIFE</li>
                    <li className="category-name">SKYSCRAPERS</li>
                    <li className="category-name">CELESTIAL BODIES</li>
                    <li className="category-name">BEASTS/BEHEMOTHS</li>
                    <li className="category-name">MOUNTAINS</li>
                </ul>
                    <h3 className="editors-h3">Editor's Picks</h3>
                <section className="index-section-1">
                    <div className="editor-picks">
                        <ul className="editor-picks-list primary">
                            {editorIndexPrimary}
                        </ul>
                        <ul className="editor-picks-list tertiary">
                            {editorIndexTertiary}
                        </ul>
                        <ul className="editor-picks-list-secondary">
                            {editorIndexSecondary}
                        </ul>
                    </div>
                </section>
                <section className="index-section-2">
                    <div className="feed-all">
                        <h3>Based on your reading history</h3>
                        <ul className="feed-list">
                            {feedIndex}
                        </ul>
                    </div>
                    <div className="popular-container">
                        <div className="popular">
                            <h3>Popular on Large</h3>
                            <ol className="popular-list">
                                {popularIndex}
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}; 


export default StoryIndex;
